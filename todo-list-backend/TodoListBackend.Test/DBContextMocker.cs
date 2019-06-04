using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using TodoListBackend.BLL.DTOs;
using TodoListBackend.DAL.Entities;

namespace TodoListBackend.Test
{
    public static class DBContextMocker
    {
        public static EFTodoItemsContext GetMockedContext()
        {
            var options = new DbContextOptionsBuilder<EFTodoItemsContext>()
                .UseInMemoryDatabase("TodoItems")
                .Options;

            var dbContext = new EFTodoItemsContext(options);

            dbContext.Set<TodoItem>().Add(new TodoItem { Text = "Task 1", Completed = true });
            dbContext.Set<TodoItem>().Add(new TodoItem { Text = "Task 2", Completed = false });
            dbContext.Set<TodoItem>().Add(new TodoItem { Text = "Task 3", Completed = false });
            dbContext.Set<TodoItem>().Add(new TodoItem { Text = "Task 4", Completed = true });
            dbContext.Set<TodoItem>().Add(new TodoItem { Text = "Task 5", Completed = false });

            return dbContext;
        }

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
    }
}
