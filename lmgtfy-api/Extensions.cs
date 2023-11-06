using System.Xml.Linq;
using lmgtfy_api.Systems;

namespace lmgtfy_server.Library
{
	public static class Extensions
	{
		public static string TopLevelDomain(this Uri uri)
		{
            return GetTopLevelDomain(uri.Host);
        }

		public static string GetTopLevelDomain(string host)
		{
            string[] hostSplit = host.Split(".");
            if (host == "localhost")
                return host;
            else if (hostSplit.Length == 2)
                return host;

            host = hostSplit[^2] + "." + hostSplit[^1];

            return host;
        }
    }
}

