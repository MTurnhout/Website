//-----------------------------------------------------------------------
// <copyright file="Session.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Domain.Core
{
    using System;
    using Website.Domain.Common;

    public class Session : IEntity
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public User User { get; set; }

        public DateTime SessionAt { get; set; }

        public string IpAddress { get; set; }
    }
}
