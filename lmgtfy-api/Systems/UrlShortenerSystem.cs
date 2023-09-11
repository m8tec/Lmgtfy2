using System.Text;
using lmgtfy_api.Objects;

namespace lmgtfy_api.Systems
{
	public static class UrlShortenerSystem
	{
        private static LmgtfyDb Database => DatabaseSystem.Database;

        private static readonly string Characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        private static readonly Random Random = new();

        public static string? FindKeyByValue(this Dictionary<string, string> dictionary, string targetValue)
        {
            // Use LINQ to find the first key that matches the target value
            KeyValuePair<string, string>? pair = dictionary.FirstOrDefault(pair => pair.Value.Equals(targetValue));
            if (pair is not null)
                return pair.Value.Key;

            // If no match is found, return null
            return null;
        }

        private static string GenerateShortLink(int length = 6)
        {
            StringBuilder shortLink = new();

            for (int i = 0; i < length; i++)
            {
                int index = Random.Next(Characters.Length);
                shortLink.Append(Characters[index]);
            }

            return shortLink.ToString();
        }

        private static string GetFullShortenedLink(string shortPart)
        {
            return Database.AllowedHosts.First() + "/s/" + shortPart;
        }

        public static string GetShortLink(string link)
        {
            // parse to uri
            Uri url = new(link);

            // check link integrity
            if (!IsLinkAllowedToShort(url))
                return link;

            string? shortLink = null;
            lock (Database.ShortLinks)
            {
                // try to reuse already existing link
                shortLink = Database.ShortLinks.FindKeyByValue(url.Query);
                bool reused = true;

                while (shortLink is null ||
                    reused is false && Database.ShortLinks.ContainsValue(shortLink))
                {
                    reused = false;
                    shortLink = GenerateShortLink();
                }

                Database.ShortLinks[shortLink] = url.Query;
                DatabaseSystem.Save();
            }

            return GetFullShortenedLink(shortLink);
        }

        private static bool IsLinkAllowedToShort(Uri url)
        {
            if (Database.AllowedHosts.Contains(url.Host))
                return true;

            return false;
        }

        public static bool ResolveShortUrl(string link, out string longLink)
        {
            longLink = "";
            
            lock (Database.ShortLinks)
            {
                if (Database.ShortLinks.TryGetValue(link, out string? query))
                {
                    longLink = Database.AllowedHosts.First() + "/" + query;

                    return true;
                }
            }

            return false;
        }
    }
}
