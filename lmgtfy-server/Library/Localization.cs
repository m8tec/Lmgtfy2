namespace lmgtfy_server.Library
{
	public class Localization : lmgtfy_api.Objects.JsonSavable
	{
        public Dictionary<string, Language> Languages { get; set; } = new();
	}

    public class ChoosableLanguage
    {
        public ChoosableLanguage(string code1, string presentation1)
        {
            code = code1;
            presentation = presentation1;
        }

        public string code { get; set; }
        public string presentation { get; set; }
    }

    public class Language
    {
        public string Presentation { get; set; }
        public Dictionary<string, string> Translations { get; set; } 
    }
}
