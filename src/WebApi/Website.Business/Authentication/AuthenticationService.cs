using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Website.Business.Authentication.Models;
using Website.Business.Settings;

namespace Website.Business.Authentication
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly ApplicationSettings _applicationSettings;

        public AuthenticationService(IOptions<ApplicationSettings> applicationSettings)
        {
            _applicationSettings = applicationSettings.Value;
        }

        public AuthenticatedUserModel Authenticate(UserCredentials userCredentials)
        {
            var authenticationModel = new AuthenticatedUserModel
            {
                Guid = Guid.NewGuid(),
                FirstName = "Martijn",
                LastName = "Turnhout",
                Email = "martijnturnhout@example.com"
            };

            // JWT token
            var key = Encoding.ASCII.GetBytes(_applicationSettings.JwtSecret);
            var tokenHandler = new JwtSecurityTokenHandler();
            authenticationModel.Token = tokenHandler.WriteToken(tokenHandler.CreateToken(new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier, authenticationModel.Guid.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            }));

            return authenticationModel;
        }
    }
}