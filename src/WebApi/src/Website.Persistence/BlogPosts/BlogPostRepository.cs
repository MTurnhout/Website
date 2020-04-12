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

    public class BlogPostRepository : Repository<BlogPost>, IBlogPostRepository
    {
        public BlogPostRepository(IDatabaseContext databaseContext)
            : base(databaseContext)
        {
        }
    }
}
