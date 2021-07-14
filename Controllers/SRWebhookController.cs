using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreVueStarter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SRWebhookController : ControllerBase
    {
        // GET: SRWebhookController
        public ActionResult Index()
        {
            return StatusCode(200, "Works");
        }

        // POST: SRWebhookController
        [HttpPost]
        public ActionResult Post()
        {
            var context = HttpContext.Request;
            if (context.Headers.ContainsKey("X-Hook-Secret"))
            {
                var secret = context.Headers.FirstOrDefault(x => x.Key == "X-Hook-Secret").Value;
                Response.Headers.Add("X-Hook-Secret", secret);
                return StatusCode(200, "X-Hook-Secret: "+secret);
            }
            return StatusCode(202, "Works");
        }
    }
}
