using System.Text;
using lmgtfy_api.Objects;
using lmgtfy_server.Library;

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

        private static string GetFullShortenedLink(string host, string shortPart)
        {
            return "http://" + host + "/s/" + shortPart;
        }

        public static string GetShortLink(string link)
        {
            // parse to uri
            if (!Uri.TryCreate(link, new UriCreationOptions(), out Uri? url))
                return link;

            // check link integrity
            if (!IsLinkAllowedToShort(url))
                return link;

            string linkSave = url.AbsoluteUri.Replace("http://", "").Replace("https://", "");
            string host = Extensions.GetTopLevelDomain(url.Host);
            linkSave = linkSave.Replace(host, "{{host}}");

            string? shortLink = null;
            lock (Database.ShortLinks)
            {
                // try to reuse already existing link
                shortLink = Database.ShortLinks.FindKeyByValue(linkSave);
                bool reused = true;

                while (shortLink is null ||
                    reused is false && Database.ShortLinks.ContainsValue(shortLink))
                {
                    reused = false;
                    shortLink = GenerateShortLink();
                }

                Database.ShortLinks[shortLink] = linkSave;
                DatabaseSystem.Save();
            }

            return GetFullShortenedLink(host, shortLink);
        }

        private static bool IsLinkAllowedToShort(Uri url)
        {
            if (url.AbsolutePath.Any() && !url.AbsolutePath.Equals("/"))
                return false;

            string host = url.TopLevelDomain();
            if (Database.AllowedHosts.Contains(host))
                return true;

            return false;
        }

        public static bool ResolveShortUrl(string link, out string longLink)
        {
            if (!Uri.TryCreate(link, new UriCreationOptions(), out Uri url))
            {
                longLink = link;
                return false;
            }

            longLink = "";
            
            lock (Database.ShortLinks)
            {
                if (Database.ShortLinks.TryGetValue(url.AbsolutePath.Split("/").Last(), out longLink))
                {
                    longLink = longLink.Replace("{{host}}", Extensions.GetTopLevelDomain(url.Host));

                    return true;
                }
            }

            return false;
        }
    }
}
