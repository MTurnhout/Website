using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Website.Business.Authentication.Enums;
using Website.Business.Authentication.Models;
using Website.Business.Settings;

namespace Website.Business.Authentication
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly JwtSettings _jwtSettings;

        public AuthenticationService(IOptions<JwtSettings> jwtSettings)
        {
            _jwtSettings = jwtSettings.Value;
        }

        public ApplicationUserModel Authenticate(UserCredentials userCredentials)
        {
            var authenticationModel = new ApplicationUserModel
            {
                UserName = "MTurnhout",
                FirstName = "Martijn",
                LastName = "Turnhout",
                Email = "martijnturnhout@example.com",
                IsAuthenticated = true,
                Claims = new List<ApplicationClaimType>()
            };

            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, authenticationModel.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            foreach (ApplicationClaimType claimType in Enum.GetValues(typeof(ApplicationClaimType)))
            {
                authenticationModel.Claims.Add(claimType);
                claims.Add(new Claim(claimType.ToString(), "true"));
            }

            // JWT token
            var key = Encoding.ASCII.GetBytes(_jwtSettings.Key);
            var tokenHandler = new JwtSecurityTokenHandler();
            authenticationModel.BearerToken = tokenHandler.WriteToken(
                tokenHandler.CreateToken(new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(claims),
                    Issuer = _jwtSettings.Issuer,
                    Audience = _jwtSettings.Audience,
                    Expires = DateTime.UtcNow.AddMinutes(_jwtSettings.MinutesToExpiration),
                    SigningCredentials = new SigningCredentials(
                        new SymmetricSecurityKey(key),
                        SecurityAlgorithms.HmacSha256Signature)
                }));

            return authenticationModel;
        }
    }
}