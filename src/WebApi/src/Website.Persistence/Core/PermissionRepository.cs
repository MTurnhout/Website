//-----------------------------------------------------------------------
// <copyright file="PermissionRepository.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace CleanArchitecture.Persistence.Customers
{
    using Website.Application.Interfaces.Persistence;
    using Website.Domain.Core;
    using Website.Persistence.Shared;

    public class PermissionRepository : Repository<Permission>, IPermissionRepository
    {
        public PermissionRepository(IDatabaseContext databaseContext)
            : base(databaseContext)
        {
        }
    }
}
