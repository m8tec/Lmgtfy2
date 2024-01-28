using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

public class RecentJsonRedirectMiddleware
{
    private readonly RequestDelegate _next;

    public RecentJsonRedirectMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        // Check if the request path is "/recent.json"
        if (context.Request.Path == "/recent.json")
        {
            // Build the target URL
            string targetUrl = "http://api.m8tec.com/recent.json";

            // Perform the redirection
            context.Response.Redirect(targetUrl, permanent: true);
            return;
        }

        // Continue processing the request
        await _next(context);
    }
}
