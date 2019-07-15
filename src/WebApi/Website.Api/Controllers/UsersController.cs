using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Website.Business.Authentication;
using Website.Business.Authentication.Models;

namespace Mt.Website.Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IAuthenticationService _authenticationService;

        public UsersController(IAuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Post([FromBody] UserCredentials userCredentials)
        {
            var user = _authenticationService.Authenticate(userCredentials);
            if (user == null)
                BadRequest(new { message = "Email or password is incorrect" });

            return Ok(user);
        }
    }
}
