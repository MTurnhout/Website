//-----------------------------------------------------------------------
// <copyright file="Repository.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Persistence.Shared
{
    using System.Linq;
    using Website.Application.Interfaces.Persistence;
    using Website.Domain.Common;

    public class Repository<T> : IRepository<T>
        where T : class, IEntity
    {
        private readonly IDatabaseContext databaseContext;

        public Repository(IDatabaseContext databaseContext)
        {
            this.databaseContext = databaseContext;
        }

        public IQueryable<T> GetAll()
        {
            return this.databaseContext.Set<T>();
        }

        public T Get(int id)
        {
            return this.databaseContext.Set<T>()
                .First(p => p.Id == id);
        }

        public void Add(T entity)
        {
            this.databaseContext.Set<T>().Add(entity);
        }

        public void Remove(T entity)
        {
            this.databaseContext.Set<T>().Remove(entity);
        }
    }
}