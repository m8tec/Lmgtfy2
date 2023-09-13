using System.Text;
using System.Transactions;
using lmgtfy_api.Systems;
using lmgtfy_server.Library;
using Newtonsoft.Json;
using Serilog;

namespace lmgtfy_server.Systems
{
    public static class SiteBuilderSystem
    {
        public static Localization Localization { get; set; } = new();
        private const string LocalizationPath = "Library/";
        private const string TemplatePath = "Library/SiteTemplates/main.html";

        private static ChoosableLanguage[] Languages { get; set; }
        private static Language StandardLanguage => Localization.Languages["en"];

        private static Serilog.ILogger Logger = Log.Logger.ForType(typeof(SiteBuilderSystem));

        private static string ApplyTranslation(string templateHtml, Language language)
        {
            // Replace placeholders with translations
            foreach ((string key, string translation) in language.Translations)
            {
                // Assuming the placeholders in the template HTML are in the format "{{Key}}"
                string placeholder = $"{{{{{key}}}}}";
                templateHtml = templateHtml.Replace(placeholder, translation);
            }

            return templateHtml;
        }

        private static void CreateSite(string languageCode, Language language)
		{
            // Read the template HTML file
            string templateHtml = File.ReadAllText(TemplatePath);

            // Apply requested translation
            templateHtml = ApplyTranslation(templateHtml, language);
            // Try apply left-over variables with standard language
            templateHtml = ApplyTranslation(templateHtml, StandardLanguage);

            // Set sites current language selection in dropdown list
            templateHtml = templateHtml.Replace("{{currentLocale}}", languageCode);
            // Add other languages to language dropdown list
            templateHtml = templateHtml.Replace("{{languages}}", JsonConvert.SerializeObject(Languages));
            // Set current year ("2022-yearToday")
            templateHtml = templateHtml.Replace("{{yearToday}}", $"{DateTimeOffset.UtcNow.Year}");

            // Save the modified HTML as "de.index" in the "wwwroot" folder
            string outputPath = Path.Combine("wwwroot", $"{languageCode}.index.html");
            File.WriteAllText(outputPath, templateHtml, Encoding.UTF8);

            Logger.Debug("Created '{languageCode}' home site", languageCode);
        }

		public static void CreateSites()
		{
            Languages = Localization.Languages
                .Select(entry => new ChoosableLanguage(entry.Key, entry.Value.Presentation))
                .ToArray();

            int count = 0;
			foreach ((string languageCode, Language language) in Localization.Languages)
			{
				CreateSite(languageCode, language);
                count++;
			}

            Logger.Debug("Created home site in {count} languages", count);
		}

		public static void Init()
		{
			if (!File.Exists(TemplatePath))
				throw new DirectoryNotFoundException("Couldn't find template");

			if (File.Exists(LocalizationPath + Localization.GetType().Name + ".json"))
                Localization = JsonSystem.Load<Localization>(LocalizationPath);

			Localization.Save(LocalizationPath);

			VerifyTranslations();
            CreateSites();
		}

		private static void VerifyTranslations()
		{
            foreach ((string languageCode, Language language) in Localization.Languages)
            {
                List<string> duplicateValues = language.Translations.GroupBy(pair => pair.Value)
                    .Where(group => group.Count() > 1)
                    .Select(group => group.Key)
                    .ToList();

                if (duplicateValues.Count > 0)
                    throw new Exception($"Duplicate translation values found in '{languageCode}' language for keys: {string.Join(", ", duplicateValues)}");
                if (string.IsNullOrEmpty(language.Presentation))
                    throw new MissingFieldException($"Language Presentation of {languageCode} is missing");

                foreach ((string key, string value) in language.Translations)
                {
                    if (string.IsNullOrEmpty(value))
                        throw new NullReferenceException($"Translation for key '{key}' of language '{languageCode}' is empty");
                }
            }

            Logger.Debug("Verified translations");
        }
	}
}

