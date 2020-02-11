//-----------------------------------------------------------------------
// <copyright file="Permission.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Domain.Core
{
    using System;
    using Website.Domain.Common;

    public class Permission : IEntity
    {
        public int Id { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime ModifiedAt { get; set; }

        public string Name { get; set; }
    }
}
