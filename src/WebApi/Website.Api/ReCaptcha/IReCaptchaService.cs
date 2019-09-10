namespace Website.Api.ReCaptcha
{
    public interface IReCaptchaService
    {
        bool Validate(string responseToken, string remoteIp = null);
    }
}