namespace lmgtfy_api.Objects
{
	public class RecentQuery
	{
		public RecentQuery(SavedQuery query)
		{
			q = query.Query;

            string encodedQuery = Uri.EscapeDataString(q);
			string baseUrl = "https://lmgtfy2.com";
            url = $"{baseUrl}/?q={encodedQuery}";
        }

        public string q { get; set; }
		public string url { get; set; }
	}
}

