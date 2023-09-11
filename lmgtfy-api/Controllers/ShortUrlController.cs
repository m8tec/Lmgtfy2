using lmgtfy_api.Systems;
using Microsoft.AspNetCore.Mvc;

namespace lmgtfy_api.Controllers
{
    [ApiController]
    [Route("short_urls")]
    public class ShortUrlController : ControllerBase
    {
        [HttpPost(Name = "short_urls")]
        public IActionResult CreateShortUrl([FromBody] ShortUrlRequest request)
        {
            // Simulate generating a short URL
            string generatedShortUrl = UrlShortenerSystem.GetShortLink(request.short_url.url);

            ShortUrlResponse response = new(generatedShortUrl);

            return Ok(response);
        }
    }

    public class ShortUrlRequest
    {
        public ShortUrlData short_url { get; set; }
    }

    public class ShortUrlData
    {
        public string url { get; set; }
    }

    public class ShortUrlResponse
    {
        public ShortUrlResponse(string shortUrl) => short_url = shortUrl;

        public string short_url { get; set; }
    }
}
