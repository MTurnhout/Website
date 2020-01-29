//-----------------------------------------------------------------------
// <copyright file="Role.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Domain.Core
{
    using Website.Domain.Common;

    public class Role : IEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }
    }
}
