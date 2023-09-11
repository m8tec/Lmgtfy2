namespace lmgtfy_api.Objects
{
	public class LmgtfyDb : JsonSavable
	{
		public List<string> AllowedHosts { get; set; } = new()
		{ "m8tec.com", "lmgtfy2.com" };
		public Dictionary<float, SavedQuery> Queries { get; set; } = new();
		public Dictionary<string, string> ShortLinks { get; set; } = new();
	}

	public class SavedQuery
	{
		public SavedQuery(string query)
		{
			Query = query;
			Date = DateTimeOffset.UtcNow;
		}

		public string Query { get; set; }
		public DateTimeOffset Date { get; set; }
	}
}
