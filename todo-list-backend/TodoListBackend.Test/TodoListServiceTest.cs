using Moq;
using System.Threading.Tasks;
using TodoListBackend.DAL.Entities;
using TodoListBackend.DAL.Interfaces;
using TodoListBackend.BLL.Services;
using TodoListBackend.BLL.DTOs;
using System.Diagnostics.CodeAnalysis;
using Xunit;
using System;
using System.Collections.Generic;

namespace TodoListBackend.Test
{
    [ExcludeFromCodeCoverage]
    public class TodoListServiceTest
    {
        [Fact]
        public async Task TestGetAllAsync()
        {
            // Arrange
            var mock = new Mock<ITodoItemAsyncRepository>();
            mock.Setup(serv => serv.GetAllAsync()).Returns(async () => { return DullData.GetAllItemsList(); });
            var service = new TodoItemService(mock.Object);

            // Act
            var value = (await service.GetAllAsync()) as List<TodoItemDTO>;

            // Assert
            Assert.Equal(5, value.Count);
        }
        [Fact]
        public async Task TestGetByIdAsync_CheckTodoItem()
        {
            // Arrange
            var mock = new Mock<ITodoItemAsyncRepository>();
            int id = 1;
            TodoItem item = new TodoItem
            {
                Id = 1,
                Text = "",
                Completed = true
            };
            mock.Setup(repo => repo.GetByIdAsync(id)).Returns(async () => { return item; });
            var service = new TodoItemService(mock.Object);

            // Act
            var result = await service.GetByIdAsync(id);

            // Assert
            Assert.Equal(item.Id, result.Id);
        }
        [Fact]
        public async Task TestGetByIdAsync_CheckNullReferenceException()
        {
            // Arrange
            var mock = new Mock<ITodoItemAsyncRepository>();
            int id = 1;
            mock.Setup(repo => repo.GetByIdAsync(id)).Returns(async () => { return null; });
            var service = new TodoItemService(mock.Object);

            // Act & Assert 
            await Assert.ThrowsAsync<NullReferenceException>(async () => await service.GetByIdAsync(id));
        }
        [Fact]
        public async Task TestDeleteAsync_CheckNullReferenceException()
        {
            // Arrange
            var mock = new Mock<ITodoItemAsyncRepository>();
            int inputValue = 12345;
            mock.Setup(serv => serv.DeleteAsync(inputValue)).Returns(async () => { throw new NullReferenceException(); });
            var todoItemService = new TodoItemService(mock.Object);

            // Act & Assert
            await Assert.ThrowsAsync<NullReferenceException>(() => todoItemService.DeleteAsync(inputValue));
        }

        [Fact]
        public async Task TestDeleteAsync_CheckException()
        {
            // Arrange
            var mock = new Mock<ITodoItemAsyncRepository>();
            int inputValue = 12345;
            mock.Setup(serv => serv.DeleteAsync(inputValue)).Returns(async () => { throw new Exception(); });
            var todoItemService = new TodoItemService(mock.Object);

            // Act & Assert
            await Assert.ThrowsAsync<Exception>(() => todoItemService.DeleteAsync(inputValue));
        }
        [Fact]
        public async Task TestDeleteAsync_CheckTodoItem()
        {
            // Arrange
            var mock = new Mock<ITodoItemAsyncRepository>();
            int inputValue = 1;
            TodoItem todoItem = new TodoItem { Completed = false, Id = 1, Text = "Learn" };
            mock.Setup(serv => serv.DeleteAsync(inputValue)).Returns(async () => { return todoItem; });
            var todoItemService = new TodoItemService(mock.Object);

            // Act
            var result = await todoItemService.DeleteAsync(inputValue);

            // Assert
            Assert.IsType<TodoItemDTO>(result);
        }
    }
}
