using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TodoListBackend.BLL.DTOs;
using TodoListBackend.BLL.Interfaces;
using TodoListBackend.DAL.Entities;
using TodoListBackend.DAL.Interfaces;
using AutoMapper;

namespace TodoListBackend.BLL.Services
{
    public class TodoItemService : ITodoItemService
    {
        private ITodoItemAsyncRepository _repository;
        private readonly IMapper _mapper;

        public TodoItemService(ITodoItemAsyncRepository repo)
        {
            _repository = repo;
            _mapper = new MapperConfiguration(cfg => cfg.CreateMap<TodoItem, TodoItemDTO>()).CreateMapper();
        }

        public async Task<TodoItemDTO> CreateAsync(TodoItemDTO item)
        {
            TodoItem todoItem = _mapper.Map<TodoItemDTO, TodoItem>(item);
            return await _mapper.Map<Task<TodoItem>, Task<TodoItemDTO>>(_repository.CreateAsync(todoItem));
        }

        public async Task<TodoItemDTO> DeleteAsync(int id)
        {
            TodoItem del = await _repository.DeleteAsync(id);
            return _mapper.Map<TodoItem, TodoItemDTO>(del);
        }

        public async Task<IEnumerable<TodoItemDTO>> GetAllAsync()
        {
            IEnumerable<TodoItem> allItems = await _repository.GetAllAsync();
            return _mapper.Map<IEnumerable<TodoItem>, IEnumerable<TodoItemDTO>>(allItems);
        }

        public async Task<TodoItemDTO> GetByIdAsync(int id)
        {
            TodoItem item = await _repository.GetByIdAsync(id);

            if (item == null)
            {
                throw new NullReferenceException("Item was not found");
            }

            return _mapper.Map<TodoItem, TodoItemDTO>(item);
        }

        public async Task<TodoItemDTO> UpdateAsync(TodoItemDTO item)
        {
            TodoItem todoItem = _mapper.Map<TodoItemDTO, TodoItem>(item);
            return await _mapper.Map<Task<TodoItem>, Task<TodoItemDTO>>(_repository.UpdateAsync(todoItem));
        }
    }
}
