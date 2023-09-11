public class LiveSubdomainRedirectMiddleware
{
    private readonly RequestDelegate _next;

    public LiveSubdomainRedirectMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        // Check if the request's host is live.m8tec.com
        if (context.Request.Host.Host.Equals("live.m8tec.com", StringComparison.OrdinalIgnoreCase))
        {
            // Build the target URL
            var targetUrl = $"{context.Request.Scheme}://m8tec.com/live{context.Request.Path}{context.Request.QueryString}";

            // Perform the redirection
            context.Response.Redirect(targetUrl, permanent: true);
            return;
        }

        // Continue processing the request
        await _next(context);
    }
}
