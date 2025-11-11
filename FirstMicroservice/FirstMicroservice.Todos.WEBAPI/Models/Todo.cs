namespace FirstMicroservice.Todos.WEBAPI.Models;

public sealed class Todo
{
    public int Id { get; set; }
    public string Work { get; set; } = default!;
}
