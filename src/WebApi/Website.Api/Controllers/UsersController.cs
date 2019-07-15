using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

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

    public class UserCredentials
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class AuthenticatedUserModel
    {
        public Guid Guid { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
    }

    public interface IUserService
    {
        AuthenticatedUserModel Authenticate(UserCredentials userCredentials);
    }

    public class UserService : IUserService
    {
        public AuthenticatedUserModel Authenticate(UserCredentials userCredentials)
        {
            return new AuthenticatedUserModel
            {
                Guid = Guid.NewGuid(),
                FirstName = "Martijn",
                LastName = "Turnhout",
                Email = "martijnturnhout@example.com",
                Token = null
            };
        }
    }
}
