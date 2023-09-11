using Microsoft.AspNetCore.Mvc;

namespace lmgtfy_server.Controllers
{
    [Route("s")]
    public class RedirectController : ControllerBase
    {
        [Route("{shortLink}")]
        public IActionResult RedirectShortUrl(string shortLink)
        {
            // Check if the short link exists in the dictionary
            if (lmgtfy_api.Systems.UrlShortenerSystem.ResolveShortUrl(shortLink, out string longLink))
            {
                // Redirect to the original URL
                return Redirect("http://" + longLink);
            }

            // Handle the case where the short link is not found (e.g., return a 404 Not Found response)
            return NotFound();
        }
    }
}
