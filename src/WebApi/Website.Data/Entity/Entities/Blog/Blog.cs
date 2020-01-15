//-----------------------------------------------------------------------
// <copyright file="Blog.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------
namespace Website.Data.Entity
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Blog", Schema = "blog")]
    internal class Blog
    {
        public int Id { get; set; }

        public int CreatedById { get; set; }

        public User CreatedBy { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime CreatedAt { get; set; }

        public int ModifiedById { get; set; }

        public User ModifiedBy { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime ModifiedAt { get; set; }

        [Required]
        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime? PublishedAt { get; set; }

        public List<Post> Posts { get; set; } = new List<Post>();
    }
}
