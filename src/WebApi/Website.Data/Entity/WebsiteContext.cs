//-----------------------------------------------------------------------
// <copyright file="WebsiteContext.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------
namespace Website.Data.Entity
{
    using System;
    using Microsoft.EntityFrameworkCore;
    using Website.Data.Entity.Extensions;

    internal class WebsiteContext : DbContext
    {
        public WebsiteContext(DbContextOptions<WebsiteContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }

        public DbSet<UserDetail> UserDetails { get; set; }

        public DbSet<UserRole> UserRoles { get; set; }

        public DbSet<Role> Roles { get; set; }

        public DbSet<RolePermission> RolePermissions { get; set; }

        public DbSet<Permission> Permission { get; set; }

        public DbSet<Session> Sessions { get; set; }

        public DbSet<Blog> Blog { get; set; }

        public DbSet<Post> Posts { get; set; }

        public DbSet<PostContent> PostContents { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.SetDefaultDateTimeKind(DateTimeKind.Utc);
        }
    }
}
