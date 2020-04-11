//-----------------------------------------------------------------------
// <copyright file="BlogPostConfiguration.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace CleanArchitecture.Persistence.BlogPosts
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;
    using Website.Domain.BlogPost;

    public class BlogPostConfiguration
        : IEntityTypeConfiguration<BlogPost>
    {
        public void Configure(EntityTypeBuilder<BlogPost> builder)
        {
            builder.HasKey(e => e.Id);
            builder.Property(e => e.CreatedAt)
                .ValueGeneratedOnAdd();
            builder.Property(e => e.ModifiedAt)
                .ValueGeneratedOnAddOrUpdate();
        }
    }
}
