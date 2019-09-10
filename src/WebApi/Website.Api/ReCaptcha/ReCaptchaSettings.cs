namespace Website.Api.ReCaptcha
{
    public class ReCaptchaSettings
    {
        public bool IsEnabled { get; set; }
        public string ValidationUrl { get; set; }
        public string SecretKey { get; set; }
    }
}