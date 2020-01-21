//-----------------------------------------------------------------------
// <copyright file="DatabaseSettings.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Common.Database
{
    /// <summary>
    /// Database settings used to configure entity framework.
    /// </summary>
    public class DatabaseSettings
    {
        /// <summary>
        /// Gets or sets the database type.
        /// </summary>
        /// <value>The database type.</value>
        public DatabaseType DatabaseType { get; set; }

        /// <summary>
        /// Gets or sets the connection string.
        /// </summary>
        /// <value>The connection string.</value>
        public string ConnectionString { get; set; }
    }
}
