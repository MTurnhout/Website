//-----------------------------------------------------------------------
// <copyright file="RolePermissionConfiguration.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Persistence.Customers
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;
    using Website.Domain.Core;

    public class RolePermissionConfiguration
        : IEntityTypeConfiguration<RolePermission>
    {
        public void Configure(EntityTypeBuilder<RolePermission> builder)
        {
            builder.HasKey(e => e.Id);
            builder.Property(e => e.CreatedAt)
                .ValueGeneratedOnAdd();
            builder.Property(e => e.ModifiedAt)
                .ValueGeneratedOnAddOrUpdate();
        }
    }
}
