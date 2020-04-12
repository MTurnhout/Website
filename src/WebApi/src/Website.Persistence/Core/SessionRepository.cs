//-----------------------------------------------------------------------
// <copyright file="SessionRepository.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Persistence.Customers
{
    using Website.Application.Interfaces.Persistence;
    using Website.Domain.Core;
    using Website.Persistence.Shared;

    public class SessionRepository : Repository<Session>, ISessionRepository
    {
        public SessionRepository(IDatabaseContext databaseContext)
            : base(databaseContext)
        {
        }
    }
}
