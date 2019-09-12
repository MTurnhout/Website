using System.Security.Claims;
using Website.Business.Authentication.Models;

namespace Website.Business.Authentication
{
    public interface IAuthenticationService
    {
        ApplicationUserModel Authenticate(UserCredentials userCredentials);
        ApplicationUserModel Restore(ClaimsPrincipal user);
    }
}