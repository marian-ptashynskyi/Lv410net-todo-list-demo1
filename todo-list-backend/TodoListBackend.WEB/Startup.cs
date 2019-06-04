using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using TodoListBackend.DAL.Entities;
using TodoListBackend.DAL.Interfaces;
using TodoListBackend.DAL.Repositories;
using TodoListBackend.BLL.Interfaces;
using TodoListBackend.BLL.Services;

namespace TodoListBackend.WEB
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        
        public void ConfigureServices(IServiceCollection services)
        {
            string connection = Configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<EFTodoItemsContext>(options => options.UseSqlServer(connection));
            services.AddScoped<ITodoItemAsyncRepository, TodoItemAsyncRepository>();
            services.AddScoped<ITodoItemService, TodoItemService>();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
        }
        
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {            
            app.UseMvc();
        }
    }
}
