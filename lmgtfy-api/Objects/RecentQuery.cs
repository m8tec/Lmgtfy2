namespace lmgtfy_api.Objects
{
	public class RecentQuery
	{
		public RecentQuery(SavedQuery query)
		{
			q = query.Query;
			url = "link";
		}

        public string q { get; set; }
		public string url { get; set; }
	}
}

