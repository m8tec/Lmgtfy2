using lmgtfy_api;
using lmgtfy_api.Systems;

public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // Configure services
    public void ConfigureServices(IServiceCollection services)
    {
        List<string> origins = new();
        foreach (string allowedHost in DatabaseSystem.Database.AllowedHosts)
        {
            Console.WriteLine($"http://{allowedHost}");
            origins.Add($"http://{allowedHost}");
            origins.Add($"https://{allowedHost}");

            foreach (string languageCode in Program.Localization.Languages.Keys)
            {
                origins.Add($"http://{languageCode}.{allowedHost}");
                origins.Add($"https://{languageCode}.{allowedHost}");
            }
        }

        // Add services and configure dependencies here
        services.AddControllers();
        services.AddCors(options =>
        {
            options.AddPolicy("AllowOrigin", builder =>
            {
                builder.WithOrigins(origins.ToArray())
                       .AllowAnyMethod()
                       .AllowAnyHeader()
                       .AllowCredentials();
            });
        });
    }

    // Configure the HTTP request pipeline
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }
        else
        {
            // Configure production-level error handling
            app.UseExceptionHandler("/Home/Error");
            app.UseHsts();
        }

        app.UseHttpsRedirection();
        app.UseStaticFiles();

        app.UseCors("AllowOrigin"); // Apply the CORS policy

        app.UseRouting();
        app.UseAuthorization();

        app.UseWebSockets();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
    }

    private string[] GetOrigins()
    {
        var allowedDomains = Configuration.GetSection("AllowedDomains").Get<List<string>>() ?? new();
        if (!allowedDomains.Any())
            throw new Exception("Allowed domains missing");

        List<string> origins = new();
        foreach (string domain in allowedDomains)
        {
            origins.Add("http://" + domain);
            origins.Add("https://" + domain);
        }

        return allowedDomains.ToArray();
    }
}
