using System;
using Website.Business.Interfaces;
using Website.Business.Models;

namespace Website.Business.Services
{
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