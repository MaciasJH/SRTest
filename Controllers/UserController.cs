using AspNetCoreVueStarter.Models;
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
    public class UserController : ControllerBase
    {
        [HttpGet]
        public User Get()
        {
            //var fullUser = User.Identity.Name;
            return new User()
            {
                //Username = fullUser.Split('\\')[1]
                Username = "Test"
            };
        }
    }
}
