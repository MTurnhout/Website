//-----------------------------------------------------------------------
// <copyright file="DateTimeKindValueConverter.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Data.Entity.Converters
{
    using System;
    using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

    public class DateTimeKindValueConverter : ValueConverter<DateTime, DateTime>
    {
        public DateTimeKindValueConverter(DateTimeKind kind, ConverterMappingHints mappingHints = null)
            : base(
                v => v.ToUniversalTime(),
                v => DateTime.SpecifyKind(v, kind),
                mappingHints)
        {
        }
    }
}
