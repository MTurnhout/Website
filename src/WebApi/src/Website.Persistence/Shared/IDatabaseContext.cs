//-----------------------------------------------------------------------
// <copyright file="IDatabaseContext.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Persistence.Shared
{
    using Microsoft.EntityFrameworkCore;
    using Website.Domain.BlogPost;
    using Website.Domain.Common;
    using Website.Domain.Core;

    public interface IDatabaseContext
    {
        DbSet<User> Users { get; set; }

        DbSet<UserRole> UserRoles { get; set; }

        DbSet<Role> Roles { get; set; }

        DbSet<RolePermission> RolePermissions { get; set; }

        DbSet<Permission> Permission { get; set; }

        DbSet<Session> Sessions { get; set; }

        DbSet<BlogPost> Posts { get; set; }

        DbSet<T> Set<T>()
            where T : class, IEntity;

        void Save();
    }
}
