//-----------------------------------------------------------------------
// <copyright file="IDateService.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Common.Dates
{
    using System;

    /// <summary>
    /// Date service that provides date information.
    /// </summary>
    public interface IDateService
    {
        /// <summary>
        /// Gets current date.
        /// </summary>
        /// <returns>Current date.</returns>
        DateTime GetDate();

        /// <summary>
        /// Gets current date and time.
        /// </summary>
        /// <returns>Current date and time.</returns>
        DateTime GetDateTime();
    }
}
