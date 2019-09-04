namespace Website.Business.Authentication.Models
{
    public class ApplicationUserModel
    {
        public bool IsAuthenticated { get; set; }
        public string BearerToken { get; set; }

        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
    }
}