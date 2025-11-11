using FirstMicroservice.Todos.WEBAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace FirstMicroservice.Todos.WEBAPI.Context;

public sealed class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options) { }

    public DbSet<Todo> Todos { get; set; }
}
