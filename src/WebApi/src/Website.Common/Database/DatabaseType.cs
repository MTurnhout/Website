//-----------------------------------------------------------------------
// <copyright file="DatabaseType.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Common.Database
{
    /// <summary>
    /// Enum used to specify the SQL type.
    /// </summary>
    public enum DatabaseType
    {
        /// <summary>
        /// Microsoft SQL Server.
        /// </summary>
        MsSql,

        /// <summary>
        /// SQLite.
        /// </summary>
        Sqlite,
    }
}
