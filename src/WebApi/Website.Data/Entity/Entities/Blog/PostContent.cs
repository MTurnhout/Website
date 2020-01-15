//-----------------------------------------------------------------------
// <copyright file="PostContent.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------
namespace Website.Data.Entity
{
    using System;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("PostContent", Schema = "blog")]
    internal class PostContent
    {
        public int Id { get; set; }

        public int PostId { get; set; }

        public Post Post { get; set; }

        public int CreatedById { get; set; }

        public User CreatedBy { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime CreatedAt { get; set; }

        public string Headline { get; set; }

        public string Intro { get; set; }

        public string Body { get; set; }

        public bool IsCurrent { get; set; }
    }
}
