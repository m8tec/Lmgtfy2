using System.Net;
using lmgtfy_server.Systems;

public class Program
{
    public static Dictionary<string, string> Test { get; set; }

    public static void Main(string[] args)
    {
        new Thread(new ThreadStart(lmgtfy_api.Program.Main)).Start();
        SiteBuilderSystem.Init();
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
