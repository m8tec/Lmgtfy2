using Newtonsoft.Json.Linq;
using Serilog;

namespace LMGTFY2_Server.Systems
{
	public static class ShortUrlSystem
	{
        public static ILogger Logger { get; } = Log.Logger.ForType(typeof(ShortUrlSystem));
    }
}

