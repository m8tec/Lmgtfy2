using lmgtfy_api.Objects;
using lmgtfy_api.Systems;
using Microsoft.AspNetCore.Mvc;

namespace lmgtfy_api.Controllers
{
    [ApiController]
    [Route("recent.json")]
    public class RecentController : ControllerBase
    {
        [HttpGet]
        [HttpOptions]
        public IActionResult GetRecentData()
        {
            QuerySavingSystem.TryUpdateRecents();

            RecentQuery[] recentQueries = QuerySavingSystem.RecentQueries;

            return Ok(recentQueries);
        }
    }
}
