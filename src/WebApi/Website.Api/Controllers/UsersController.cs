using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Website.Api.ReCaptcha;
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
        private readonly IHttpContextAccessor _accessor;
        private readonly IReCaptchaService _reCaptchaService;

        public UsersController(
            IAuthenticationService authenticationService,
            IHttpContextAccessor accessor,
            IReCaptchaService reCaptchaService)
        {
            _authenticationService = authenticationService;
            _accessor = accessor;
            _reCaptchaService = reCaptchaService;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public ActionResult<ApplicationUserModel> Post([FromBody] UserCredentials userCredentials)
        {
            var remoteIp = _accessor.HttpContext?.Connection?.RemoteIpAddress?.ToString();
            var validReCaptcha = _reCaptchaService.Validate(userCredentials.Recaptcha, remoteIp);
            if (!validReCaptcha)
                BadRequest(new { message = "Invalid ReCaptcha" });

            var user = _authenticationService.Authenticate(userCredentials);
            if (user == null)
                BadRequest(new { message = "Credentials are incorrect" });

            return Ok(user);
        }
    }
}
