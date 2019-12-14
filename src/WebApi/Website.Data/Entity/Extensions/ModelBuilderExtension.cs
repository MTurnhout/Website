using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Website.Data.Entity.Converters;

namespace Website.Data.Entity.Extensions
{
    public static class ModelBuilderExtension
    {
        public static void SetDefaultDateTimeKind(this ModelBuilder modelBuilder, DateTimeKind kind)
        {
            modelBuilder.UseValueConverterForType<DateTime>(new DateTimeKindValueConverter(kind));
            modelBuilder.UseValueConverterForType<DateTime?>(new DateTimeKindValueConverter(kind));
        }

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