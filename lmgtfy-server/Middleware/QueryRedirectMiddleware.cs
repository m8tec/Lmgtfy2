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
        if (context.Request.Query.Count > 0 &&
            context.Request.Path.HasValue &&
            !context.Request.Path.Value.Contains("query"))
        {
            Console.WriteLine($"[{DateTimeOffset.UtcNow:g}] Query redirect!");
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
