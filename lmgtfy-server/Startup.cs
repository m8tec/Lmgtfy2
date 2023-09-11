using Microsoft.Extensions.FileProviders;

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
        // Add services and configure dependencies here
        services.AddControllers();
        services.AddControllersWithViews();
        services.AddCors(options =>
        {
            options.AddPolicy("AllowOrigin", builder =>
            {
                builder.WithOrigins("http://m8tec.com", "https://m8tec.com", "http://api.m8tec.com", "http://localhost", "http://api.localhost")
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

        app.UseMiddleware<LiveSubdomainRedirectMiddleware>();
        app.UseMiddleware<QueryRedirectMiddleware>();
        app.UseMiddleware<RecentJsonRedirectMiddleware>();

        app.UseDefaultFiles(new DefaultFilesOptions
        {
            DefaultFileNames = new List<string> { "index.html" } // Add "index.html" as the default document
        });

        app.UseHttpsRedirection();

        app.UseStaticFiles(new StaticFileOptions
        {
            FileProvider = new PhysicalFileProvider(
            Path.Combine(env.ContentRootPath, "wwwroot", "live")),
            RequestPath = "/live"
        });

        app.UseCors("AllowOrigin"); // Apply the CORS policy

        app.UseRouting();
        app.UseAuthorization();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });

        app.UseStaticFiles();
    }
}
