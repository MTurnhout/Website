namespace Website.Business.Authentication.Models
{
    public class UserCredentials
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string Recaptcha { get; set; }
    }
}