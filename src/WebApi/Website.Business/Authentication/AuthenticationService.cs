//-----------------------------------------------------------------------
// <copyright file="AuthenticationService.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Business.Authentication
{
    using System;
    using System.Collections.Generic;
    using System.IdentityModel.Tokens.Jwt;
    using System.Security.Claims;
    using System.Text;
    using Microsoft.Extensions.Options;
    using Microsoft.IdentityModel.Tokens;
    using Website.Business.Authentication.Enums;
    using Website.Business.Authentication.Models;
    using Website.Business.Settings;

    public class AuthenticationService : IAuthenticationService
    {
        private readonly JwtSettings jwtSettings;
        private Guid userGuid = new Guid("2ef201ca-14e3-4f45-a435-587cb355e82d");

        public AuthenticationService(IOptions<JwtSettings> jwtSettings)
        {
            this.jwtSettings = jwtSettings.Value;
        }

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

        public ApplicationUserModel GetCurrentUser(ClaimsPrincipal user)
        {
            var email = user?.FindFirstValue(ClaimTypes.Email);
            if (string.IsNullOrEmpty(email))
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
