//-----------------------------------------------------------------------
// <copyright file="IUnitOfWork.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Application.Interfaces.Persistence
{
    public interface IUnitOfWork
    {
        void Save();
    }
}