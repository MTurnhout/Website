﻿//-----------------------------------------------------------------------
// <copyright file="ISessionRepository.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Application.Interfaces.Persistence
{
    using Website.Domain.Core;

    public interface ISessionRepository : IRepository<Session>
    {
    }
}
