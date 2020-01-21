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

    /// <summary>
    /// A Web API controller that provides access to users data.
    /// </summary>
    [Route("api/[controller]")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IAuthenticationService authenticationService;
        private readonly IHttpContextAccessor accessor;
        private readonly IReCaptchaService recaptchaService;

        /// <summary>
        /// Initializes a new instance of the <see cref="UsersController"/> class.
        /// </summary>
        /// <param name="authenticationService">A instance of <see cref="IAuthenticationService"/>.</param>
        /// <param name="accessor">A instance of <see cref="IHttpContextAccessor"/>.</param>
        /// <param name="recaptchaService">A instance of <see cref="IReCaptchaService"/>.</param>
        public UsersController(
            IAuthenticationService authenticationService,
            IHttpContextAccessor accessor,
            IReCaptchaService recaptchaService)
        {
            this.authenticationService = authenticationService;
            this.accessor = accessor;
            this.recaptchaService = recaptchaService;
        }

        /// <summary>
        /// Authenticate user.
        /// </summary>
        /// <param name="userCredentials">A instance of <see cref="UserCredentials"/> containing credentials of user.</param>
        /// <returns>A action result containing user information, see <see cref="ApplicationUserModel"/>.</returns>
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

        /// <summary>
        /// Gets token, claims and user information of current authenticated user.
        /// </summary>
        /// <returns>A action result containing user information, see <see cref="ApplicationUserModel"/>.</returns>
        [HttpGet("current")]
        public ActionResult<ApplicationUserModel> GetCurrentUser()
        {
            var user = this.authenticationService.GetCurrentUser(this.User);

            return this.Ok(user);
        }
    }
}
