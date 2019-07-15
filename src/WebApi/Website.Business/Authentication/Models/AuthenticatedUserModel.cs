using System;

namespace Website.Business.Authentication.Models
{
    public class AuthenticatedUserModel
    {
        public Guid Guid { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
    }
}