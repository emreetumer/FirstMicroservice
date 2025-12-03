using FirstMicroservice.Todos.WEBAPI.Context;
using FirstMicroservice.Todos.WEBAPI.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseInMemoryDatabase("MyDb");
});

var app = builder.Build();

app.MapPost("/todos/create", (string work, ApplicationDbContext context) =>
{
    Todo todo = new()
    {
        Work = work,
    };
    context.Add(todo);
    context.SaveChanges();
    return new { Message = "Baþarýyla Oluþtu" };
});

app.MapGet("/todos/getall", (ApplicationDbContext context) =>
{
    var todos = context.Todos.ToList();
    return todos;
});

app.Run();
