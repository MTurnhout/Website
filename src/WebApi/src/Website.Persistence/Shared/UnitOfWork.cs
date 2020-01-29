//-----------------------------------------------------------------------
// <copyright file="UnitOfWork.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Persistence.Shared
{
    using Website.Application.Interfaces.Persistence;

    public class UnitOfWork : IUnitOfWork
    {
        private readonly IDatabaseContext database;

        public UnitOfWork(IDatabaseContext database)
        {
            this.database = database;
        }

        public void Save()
        {
            this.database.Save();
        }
    }
}
