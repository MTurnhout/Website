using Website.Business.Authentication.Models;

namespace Website.Business.Authentication
{
    public interface IAuthenticationService
    {
        AuthenticatedUserModel Authenticate(UserCredentials userCredentials);
    }
}