//-----------------------------------------------------------------------
// <copyright file="ModelBuilderExtension.cs" company="Martijn Turnhout">
//     Copyright (c) Martijn Turnhout. All Rights Reserved.
// </copyright>
// <author>Martijn Turnhout</author>
//-----------------------------------------------------------------------

namespace Website.Persistence.Entity.Extensions
{
    using System;
    using System.Linq;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
    using Website.Persistence.Entity.Converters;

    /// <summary>
    /// Contains extension methods for <see cref="ModelBuilder"/>.
    /// </summary>
    public static class ModelBuilderExtension
    {
        /// <summary>
        /// Set the default DateTime properties kind of the entity framework entities to the specified kind.
        /// </summary>
        /// <param name="modelBuilder"><see cref="ModelBuilder"/> being extended.</param>
        /// <param name="kind">DateTime kind to set the DateTime property values in entities to.</param>
        public static void SetDefaultDateTimeKind(this ModelBuilder modelBuilder, DateTimeKind kind)
        {
            modelBuilder.UseValueConverterForType<DateTime>(new DateTimeKindValueConverter(kind));
            modelBuilder.UseValueConverterForType<DateTime?>(new DateTimeKindValueConverter(kind));
        }

        /// <summary>
        /// Sets converter for all properties of all entities in the entity model with a specific type.
        /// </summary>
        /// <param name="modelBuilder"><see cref="ModelBuilder"/> being extended.</param>
        /// <param name="converter">Value converter.</param>
        /// <typeparam name="T">Type that needs to be converted.</typeparam>
        /// <returns>Extended <see cref="ModelBuilder"/>.</returns>
        public static ModelBuilder UseValueConverterForType<T>(this ModelBuilder modelBuilder, ValueConverter converter)
        {
            var type = typeof(T);
            foreach (var entityType in modelBuilder.Model.GetEntityTypes())
            {
                var properties = entityType.ClrType.GetProperties().Where(p => p.PropertyType == type);
                foreach (var property in properties)
                {
                    modelBuilder
                        .Entity(entityType.Name)
                        .Property(property.Name)
                        .HasConversion(converter);
                }
            }

            return modelBuilder;
        }
    }
}
