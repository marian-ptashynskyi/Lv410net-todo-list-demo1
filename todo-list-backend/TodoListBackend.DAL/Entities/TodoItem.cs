using System.ComponentModel.DataAnnotations;

namespace TodoListBackend.DAL.Entities
{
    public class TodoItem
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Text { get; set; }
        [Required]
        public bool Completed { get; set; }
    }
}
