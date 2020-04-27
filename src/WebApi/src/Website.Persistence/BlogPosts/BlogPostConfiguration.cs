//-----------------------------------------------------------------------
// <copyright file="BlogPostConfiguration.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Persistence.BlogPosts
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;
    using Website.Domain.BlogPost;
    using Website.Persistence.Shared;

    /// <summary>
    /// A blog post configuration class used to specify blog post entity configuration.
    /// </summary>
    public class BlogPostConfiguration
        : IEntityTypeConfiguration<BlogPost>
    {
        /// <summary>
        /// This method gets called by <see cref="DatabaseContext" />.
        /// Use this method to configure the blog post entity.
        /// </summary>
        /// <param name="builder">A instance of <see cref="EntityTypeBuilder{BlogPost}"/>.</param>
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
