using Website.Business.Models;

namespace Website.Business.Interfaces
{
    public interface IUserService
    {
        AuthenticatedUserModel Authenticate(UserCredentials userCredentials);
    }
}