using System;

namespace Website.Common.Database
{
    public class DatabaseSettings
    {
        public DatabaseType DatabaseType { get; set; }
        public string ConnectionString { get; set; }
    }
}
