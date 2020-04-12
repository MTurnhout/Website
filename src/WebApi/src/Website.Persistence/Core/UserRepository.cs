//-----------------------------------------------------------------------
// <copyright file="UserRepository.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Persistence.Customers
{
    using Website.Application.Interfaces.Persistence;
    using Website.Domain.Core;
    using Website.Persistence.Shared;

    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(IDatabaseContext databaseContext)
            : base(databaseContext)
        {
        }
    }
}
