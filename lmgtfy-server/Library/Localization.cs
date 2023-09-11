namespace lmgtfy_server.Library
{
	public class Localization : lmgtfy_api.Objects.JsonSavable
	{
        public Dictionary<string, Dictionary<string, string>> Languages { get; set; } = new();
    }
}
