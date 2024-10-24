public class LiveSubdomainRedirectMiddleware
{
    private readonly RequestDelegate _next;

    public LiveSubdomainRedirectMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        // redirect live subdomain (live.basedomain) to subpage (basedomain.com/live)
        if (context.Request.Host.Host.StartsWith("live.", StringComparison.OrdinalIgnoreCase))
        {
            // Build the target URL
            var targetUrl = $"{context.Request.Scheme}://lmgtfy2.com/live{context.Request.Path}{context.Request.QueryString}";

            // Perform the redirection
            context.Response.Redirect(targetUrl, permanent: true);
            return;
        }

        // Continue processing the request
        await _next(context);
    }
}
