//-----------------------------------------------------------------------
// <copyright file="DateTimeKindValueConverter.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Persistence.Shared.Converters
{
    using System;
    using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

    /// <summary>
    /// DateTime kind value converter for entity framework to set the DateTime to a specific kind.
    /// </summary>
    public class DateTimeKindValueConverter : ValueConverter<DateTime, DateTime>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DateTimeKindValueConverter"/> class.
        /// </summary>
        /// <param name="kind">DateTime kind to convert to.</param>
        /// <param name="mappingHints">Specific hints used by the type mapper when mapping.</param>
        public DateTimeKindValueConverter(DateTimeKind kind, ConverterMappingHints mappingHints = null)
            : base(
                v => v.ToUniversalTime(),
                v => DateTime.SpecifyKind(v, kind),
                mappingHints)
        {
        }
    }
}
