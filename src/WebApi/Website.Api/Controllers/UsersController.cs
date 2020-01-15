//-----------------------------------------------------------------------
// <copyright file="UsersController.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------
namespace Website.Api.Controllers
{
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Website.Api.ReCaptcha;
    using Website.Business.Authentication;
    using Website.Business.Authentication.Models;

    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IAuthenticationService authenticationService;
        private readonly IHttpContextAccessor accessor;
        private readonly IReCaptchaService recaptchaService;

        public UsersController(
            IAuthenticationService authenticationService,
            IHttpContextAccessor accessor,
            IReCaptchaService recaptchaService)
        {
            this.authenticationService = authenticationService;
            this.accessor = accessor;
            this.recaptchaService = recaptchaService;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public ActionResult<ApplicationUserModel> Post([FromBody] UserCredentials userCredentials)
        {
            var remoteIp = this.accessor.HttpContext?.Connection?.RemoteIpAddress?.ToString();
            var validReCaptcha = this.recaptchaService.Validate(userCredentials.Recaptcha, remoteIp);
            if (!validReCaptcha)
            {
                return this.BadRequest(new { message = "Invalid ReCaptcha" });
            }

            var user = this.authenticationService.Authenticate(userCredentials);
            if (user == null)
            {
                return this.BadRequest(new { message = "Credentials are incorrect" });
            }

            return this.Ok(user);
        }

        [HttpGet("current")]
        public ActionResult<ApplicationUserModel> GetCurrentUser()
        {
            var user = this.authenticationService.GetCurrentUser(this.User);

            return this.Ok(user);
        }
    }
}
