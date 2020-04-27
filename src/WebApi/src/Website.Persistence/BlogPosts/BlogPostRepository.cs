//-----------------------------------------------------------------------
// <copyright file="BlogPostRepository.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Persistence.BlogPosts
{
    using Website.Application.Interfaces.Persistence;
    using Website.Domain.BlogPost;
    using Website.Persistence.Shared;

    /// <summary>
    /// A blog post respository class used to provide access to blog post data.
    /// </summary>
    public class BlogPostRepository : Repository<BlogPost>, IBlogPostRepository
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BlogPostRepository"/> class.
        /// </summary>
        /// <param name="databaseContext">A instance of <see cref="IDatabaseContext"/>.</param>
        public BlogPostRepository(IDatabaseContext databaseContext)
            : base(databaseContext)
        {
        }
    }
}
