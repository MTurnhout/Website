//-----------------------------------------------------------------------
// <copyright file="DateService.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Common.Dates
{
    using System;

    internal class DateService : IDateService
    {
        public DateTime GetDate()
        {
            return DateTime.UtcNow.Date;
        }

        public DateTime GetDateTime()
        {
            return DateTime.UtcNow;
        }
    }
}
