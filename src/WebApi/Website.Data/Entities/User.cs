using Microsoft.EntityFrameworkCore;
using System;

namespace Mt.Website.Data.Entities
{
    public class User
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        
    }
}
