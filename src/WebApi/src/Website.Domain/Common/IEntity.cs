﻿//-----------------------------------------------------------------------
// <copyright file="IEntity.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Domain.Common
{
    using System;

    public interface IEntity
    {
        int Id { get; set; }

        DateTime CreatedAt { get; set; }

        DateTime ModifiedAt { get; set; }
    }
}
