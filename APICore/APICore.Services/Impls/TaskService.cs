using APICore.Common.DTO.Request;
using APICore.Data;
using APICore.Data.Entities;
using APICore.Data.UoW;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace APICore.Services.Impls
{
    public class TaskService : ITaskService
    {
        private readonly CoreDbContext _coreDbContext;
        private readonly IUnitOfWork _uow;

        public TaskService(CoreDbContext coreDbContex, IUnitOfWork uow)
        {
            _coreDbContext = coreDbContex;
            _uow = uow;
        }
        public async Task<string> CreateAsync(CreateTaskRequest task)
        {
            var user = _uow.UserRepository.FindAsync(x => x.Id == task.User);
            UserTask userTask = new UserTask
            {
                Name = task.Name,
                User = user.Result,
                State = false

            };
            if (task is not null)
            {
                await _uow.TaskRepository.AddAsync(userTask);
                await _uow.CommitAsync();
                if (userTask.Id is not 0)
                {
                    return "Tarea Agregada Correctamente";
                }
            }
            return "La tarea no puede ser nula";
        }
        public async Task<string> RemoveAsync(int id)
        {
            if (id is not 0)
            {
                var task = await _coreDbContext.Task.FindAsync(id);
                if (task is null)
                {
                    return $"la tarea con {id} no existe";
                }
                _coreDbContext.Task.Remove(task);
                await _coreDbContext.SaveChangesAsync();
                return $"Tarea {task.Name} eliminada correctamente";
            }
            return "el id no puede ser nulo";

        }
        public async Task<string> UpdateAsync(UserTask task)
        {
            try
            {
                if (task is not null)
                {
                    _coreDbContext.Task.Update(task);
                    await _coreDbContext.SaveChangesAsync();
                    return $"Tarea {task.Name} actualizada correctamente";
                }
                return "la tarea no puede ser nula";

            }
            catch (Exception e)
            {

                throw new Exception(e.Message);
            }

        }
        public async Task<List<UserTask>> GetbyUser(int Id)
        {
            var userTasks = await _coreDbContext.Task.Where(u => u.User.Id == Id).ToListAsync();
            return userTasks;
        }

        public async Task<object> GetAsync(int? Id)
        {
            if (Id is 0)
            {
                var Task = await _coreDbContext.Task.Include(x=>x.User).ToListAsync();
                return Task;
            }
            else
                return await _coreDbContext.Task.Where(x=>x.Id==Id).Include(x => x.User).FirstOrDefaultAsync();
        }
    }
}
