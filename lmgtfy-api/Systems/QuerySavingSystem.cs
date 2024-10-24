using lmgtfy_api.Objects;
using Serilog;

namespace lmgtfy_api.Systems
{
    public static class QuerySavingSystem
    {
        private static LmgtfyDb Database => DatabaseSystem.Database;
        public static RecentQuery[] RecentQueries { get; set; } = Array.Empty<RecentQuery>();
        private static DateTimeOffset? LastRecentQueriesUpdate { get; set; }

        private static float NewQueryId
        {
            get
            {
                lock (QueryIdLocker)
                {
                    if (_newQueryId is null)
                    {
                        if (Database.Queries.Any())
                            // get max/newest existing query and add one to create a not existing id
                            _newQueryId = Database.Queries.Keys.Max() + 1;
                        else
                            _newQueryId = 0;
                    }

                    // create new id for next call
                    _newQueryId += 1;

                    // return (old) new id
                    return _newQueryId.Value - 1;
                }
            }
        }
        private static float? _newQueryId;
        private static readonly object QueryIdLocker = new();

        private static Serilog.ILogger Logger = Log.Logger.ForType(typeof(QuerySavingSystem));

        public static float UpdateQuery(string query, float? id)
        {
            id ??= NewQueryId;

            lock (Database.Queries)
            {
                if (!Database.Queries.TryGetValue(id.Value, out SavedQuery savedQuery))
                    savedQuery = new(query);

                savedQuery.Query = query; // update query
                Database.Queries[id.Value] = savedQuery; // save query in db
                DatabaseSystem.Save(); // save database
            }

            return id.Value;
        }

        public static void TryUpdateRecents()
        {
            // update if needed (data "outdated" after x seconds)
            DateTimeOffset timeNow = DateTimeOffset.UtcNow;
            double secondsElapsed = 0;
            if (LastRecentQueriesUpdate is not null)
            {
                secondsElapsed = (timeNow - LastRecentQueriesUpdate.Value).TotalSeconds;
                if (secondsElapsed < 120)
                    return;
            }
            LastRecentQueriesUpdate = timeNow;

            Logger.Debug("Start updating recent queries after {s}...", secondsElapsed);

            List<RecentQuery> recentQueries = new();
            int count = 0;
            foreach ((float _, SavedQuery query) in Database.Queries.OrderByDescending(query => query.Value.Date))
            {
                if (count >= 5000)
                    break;

                recentQueries.Add(new RecentQuery(query));
            }

            RecentQueries = recentQueries.ToArray();

            Logger.Information("Updated recent queries");
        }
    }
}
