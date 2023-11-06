using lmgtfy_server.Systems;
using Microsoft.AspNetCore.Mvc;

namespace lmgtfy_server.Controllers
{
    [Route("")]
    public class HomeTranslationController : ControllerBase
    {
        [HttpGet]
        public IActionResult Index()
        {
            string subdomain = HttpContext.Request.Host.Host.Split('.')[0];
            string translationKey = SiteBuilderSystem.Localization.Languages.ContainsKey(subdomain) ? subdomain : "en";

            string filePath = Path.Combine("wwwroot", $"{translationKey}.index.html");

            if (System.IO.File.Exists(filePath))
            {
                var fileContent = System.IO.File.ReadAllText(filePath);
                return Content(fileContent, "text/html");
            }

            // Handle the case where the requested translation-specific index.html file does not exist.
            return NotFound();
        }
    }
}
