using System.Net;
using lmgtfy_api.Objects;
using lmgtfy_api.Systems;

namespace lmgtfy_api
{
    public class Program
    {
        public static Localization Localization { get; set; }

        public static void Main()
        {
            
        }

        public static void Start(Localization localization)
        {
            Localization = localization;
            string[] args = Array.Empty<string>();
            SerilogLogger.Init(Serilog.Events.LogEventLevel.Verbose);
            DatabaseSystem.Init();
            QuerySavingSystem.TryUpdateRecents();
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                    webBuilder.ConfigureKestrel(serverOptions =>
                    {
                        serverOptions.Listen(IPAddress.Any, port: 8080);
                    });
                });
    }
}
