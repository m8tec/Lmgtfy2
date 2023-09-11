using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

public class QueryRedirectMiddleware
{
    private readonly RequestDelegate _next;

    public QueryRedirectMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        // Check if the request has any query parameters
        if (context.Request.Path == "/" && context.Request.Query.Count > 0)
        {
            // Build the redirect URL by including all query parameters
            string queryParameters = context.Request.QueryString.Value;
            string redirectUrl = $"/query/{queryParameters}";

            // Perform the redirection
            context.Response.Redirect(redirectUrl, permanent: true);
            return;
        }

        // Continue processing the request
        await _next(context);
    }
}
