using System.Collections.Generic;
using TodoListBackend.BLL.DTOs;
using TodoListBackend.DAL.Entities;

namespace TodoListBackend.Test
{
    public static class DullData
    {
        public static List<TodoItemDTO> GetAllDTOsList()
        {
            return new List<TodoItemDTO>()
            {
                new TodoItemDTO { Text = "Task 1", Completed = true },
                new TodoItemDTO { Text = "Task 2", Completed = false },
                new TodoItemDTO { Text = "Task 3", Completed = false },
                new TodoItemDTO { Text = "Task 4", Completed = true },
                new TodoItemDTO { Text = "Task 5", Completed = false }
            };
        }
        public static List<TodoItem> GetAllItemsList()
        {
            return new List<TodoItem>()
            {
                new TodoItem { Text = "Task 1", Completed = true },
                new TodoItem { Text = "Task 2", Completed = false },
                new TodoItem { Text = "Task 3", Completed = false },
                new TodoItem { Text = "Task 4", Completed = true },
                new TodoItem { Text = "Task 5", Completed = false }
            };
        }
    }
}
