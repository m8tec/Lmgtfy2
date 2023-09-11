using System.Text;
using lmgtfy_server.Library;

namespace lmgtfy_server.Systems
{
	public static class SiteBuilderSystem
	{
		private static Localization Localization { get; set; } = new();
		private const string LocalizationPath = "Library/";
		private const string TemplatePath = "Library/SiteTemplate/index.html";


        private static void CreateSite(string languageCode, Dictionary<string, string> translations)
		{
            // Read the template HTML file
            string templateHtml = File.ReadAllText(TemplatePath);

            // Replace placeholders with translations
            foreach ((string key, string translation) in translations)
            {
                // Assuming the placeholders in the template HTML are in the format "{{Key}}"
                string placeholder = $"{{{{{key}}}}}";
                templateHtml = templateHtml.Replace(placeholder, translation);
            }

            // Save the modified HTML as "de.index" in the "wwwroot" folder
            string outputPath = Path.Combine("wwwroot", $"{languageCode}.index");
            File.WriteAllText(outputPath, templateHtml, Encoding.UTF8);
        }

		public static void CreateSites()
		{
			foreach ((string languageCode, Dictionary<string, string> translations) in Localization.Languages)
			{
				CreateSite(languageCode, translations);
			}
		}

		public static void Init()
		{
			if (!File.Exists(TemplatePath))
				throw new DirectoryNotFoundException("Couldn't find template");

			if (File.Exists(LocalizationPath + Localization.GetType().Name + ".json"))
                Localization = lmgtfy_api.Systems.JsonSystem.Load<Localization>(LocalizationPath);
			Localization.Save(LocalizationPath);

            CreateSites();
		}
	}
}

