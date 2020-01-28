//-----------------------------------------------------------------------
// <copyright file="AuthenticationService.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Application.Authentication
{
    using System;
    using System.Collections.Generic;
    using System.IdentityModel.Tokens.Jwt;
    using System.Security.Claims;
    using System.Text;
    using Microsoft.Extensions.Options;
    using Microsoft.IdentityModel.Tokens;
    using Website.Application.Authentication.Enums;
    using Website.Application.Authentication.Models;
    using Website.Application.Settings;

    /// <summary>
    /// Authentication services that helps authenticate a user.
    /// </summary>
    public class AuthenticationService : IAuthenticationService
    {
        private readonly JwtSettings jwtSettings;
        private Guid userGuid = new Guid("2ef201ca-14e3-4f45-a435-587cb355e82d");

        /// <summary>
        /// Initializes a new instance of the <see cref="AuthenticationService"/> class.
        /// </summary>
        /// <param name="jwtSettings">
        /// A instance of <see cref="IOptions{JwtSettings}"/> containing the settings.
        /// </param>
        public AuthenticationService(IOptions<JwtSettings> jwtSettings)
        {
            this.jwtSettings = jwtSettings.Value;
        }

        /// <summary>
        /// Authenticate a user with the specified credentials.
        /// </summary>
        /// <param name="userCredentials">The credentials of the user.</param>
        /// <returns>User details if user can be authenticated. Otherwise null.</returns>
        public ApplicationUserModel Authenticate(UserCredentials userCredentials)
        {
            var authenticationModel = this.GetUserModel();

            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, authenticationModel.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, this.userGuid.ToString()),
                new Claim(ClaimTypes.Email, authenticationModel.Email),
            };

            foreach (ApplicationClaimType claimType in authenticationModel.Claims)
            {
                claims.Add(new Claim(claimType.ToString(), "true"));
            }

            // JWT token
            var key = Encoding.ASCII.GetBytes(this.jwtSettings.Key);
            var tokenHandler = new JwtSecurityTokenHandler();
            authenticationModel.BearerToken = tokenHandler.WriteToken(
                tokenHandler.CreateToken(new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(claims),
                    Issuer = this.jwtSettings.Issuer,
                    Audience = this.jwtSettings.Audience,
                    Expires = DateTime.UtcNow.AddMinutes(this.jwtSettings.MinutesToExpiration),
                    SigningCredentials = new SigningCredentials(
                        new SymmetricSecurityKey(key),
                        SecurityAlgorithms.HmacSha256Signature),
                }));

            return authenticationModel;
        }

        /// <summary>
        /// Get the current authenticated user details.
        /// </summary>
        /// <param name="user">The authenticated user.</param>
        /// <returns>The current authentication user details.</returns>
        public ApplicationUserModel GetCurrentUser(ClaimsPrincipal user)
        {
            var emailClaim = user?.FindFirst(ClaimTypes.Email);
            if (string.IsNullOrEmpty(emailClaim.Value))
            {
                return null;
            }

            var authenticationModel = this.GetUserModel();

            return authenticationModel;
        }

        private ApplicationUserModel GetUserModel()
        {
            var authenticationModel = new ApplicationUserModel
            {
                UserName = "MTurnhout",
                FirstName = "Martijn",
                LastName = "Turnhout",
                Email = "martijnturnhout@example.com",
                IsAuthenticated = true,
                Claims = new List<ApplicationClaimType>(),
            };

            foreach (ApplicationClaimType claimType in Enum.GetValues(typeof(ApplicationClaimType)))
            {
                authenticationModel.Claims.Add(claimType);
            }

            return authenticationModel;
        }
    }
}
