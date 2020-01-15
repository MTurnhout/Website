//-----------------------------------------------------------------------
// <copyright file="Post.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------
namespace Website.Data.Entity
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Post", Schema = "blog")]
    internal class Post
    {
        public int Id { get; set; }

        public int BlogId { get; set; }

        public Blog Blog { get; set; }

        public int CreatedById { get; set; }

        public User CreatedBy { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime CreatedAt { get; set; }

        public DateTime? PublishedAt { get; set; }

        public List<PostContent> Contents { get; set; } = new List<PostContent>();
    }
}
