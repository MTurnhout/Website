//-----------------------------------------------------------------------
// <copyright file="Session.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Data.Entity
{
    using System;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Session", Schema = "core")]
    internal class Session
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public User User { get; set; }

        public DateTime SessionAt { get; set; }

        public string IpAddress { get; set; }
    }
}
