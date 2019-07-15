using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Website.Business.Interfaces;
using Website.Business.Models;

namespace Mt.Website.Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Post([FromBody] UserCredentials userCredentials)
        {
            var user = _userService.Authenticate(userCredentials);
            if (user == null)
                BadRequest(new { message = "Email or password is incorrect" });

            return Ok(user);
        }
    }
}
