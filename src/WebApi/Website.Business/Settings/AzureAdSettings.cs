namespace Website.Business.Settings
{
    public class AzureAdSettings
    {
        public bool IsEnabled { get; set; }
        public string TenantId { get; set; }
        public string ClientId { get; set; }
        public string ClientSecret { get; set; }
    }
}
