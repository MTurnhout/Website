//-----------------------------------------------------------------------
// <copyright file="DatabaseContext.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Persistence.Shared
{
    using System;
    using Microsoft.EntityFrameworkCore;
    using Website.Domain.BlogPost;
    using Website.Domain.Common;
    using Website.Domain.Core;
    using Website.Persistence.Shared.Extensions;

    internal class DatabaseContext : DbContext, IDatabaseContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }

        public DbSet<UserRole> UserRoles { get; set; }

        public DbSet<Role> Roles { get; set; }

        public DbSet<RolePermission> RolePermissions { get; set; }

        public DbSet<Permission> Permission { get; set; }

        public DbSet<Session> Sessions { get; set; }

        public DbSet<BlogPost> Posts { get; set; }

        public new DbSet<T> Set<T>()
            where T : class, IEntity
        {
            return base.Set<T>();
        }

        public void Save()
        {
            this.SaveChanges();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.SetDefaultDateTimeKind(DateTimeKind.Utc);

            modelBuilder.ApplyConfigurationsFromAssembly(this.GetType().Assembly);
        }
    }
}
