using System.Net;
using lmgtfy_server.Systems;

public class Program
{
    public static void Main(string[] args)
    {
        SiteBuilderSystem.Init();
        Thread myNewThread = new(() => lmgtfy_api.Program.Start(SiteBuilderSystem.Localization));
        myNewThread.Start();
        CreateHostBuilder(args).Build().Run();
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.UseStartup<Startup>();
                webBuilder.ConfigureKestrel(serverOptions =>
                {
                    serverOptions.Listen(IPAddress.Any, port: 80); // Replace 80 with your desired port number
                });
            });
}
