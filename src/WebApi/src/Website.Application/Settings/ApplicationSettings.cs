//-----------------------------------------------------------------------
// <copyright file="ApplicationSettings.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Application.Settings
{
    using Website.Common.Database;

    /// <summary>
    /// Application settings.
    /// </summary>
    public class ApplicationSettings
    {
        /// <summary>
        /// Gets or sets the database type used to store data.
        /// </summary>
        /// <value>The database type used to store data.</value>
        public DatabaseType DatabaseType { get; set; }
    }
}
