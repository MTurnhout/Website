//-----------------------------------------------------------------------
// <copyright file="RoleRepository.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Persistence.Customers
{
    using Website.Application.Interfaces.Persistence;
    using Website.Domain.Core;
    using Website.Persistence.Shared;

    public class RoleRepository : Repository<Role>, IRoleRepository
    {
        public RoleRepository(IDatabaseContext databaseContext)
            : base(databaseContext)
        {
        }
    }
}
