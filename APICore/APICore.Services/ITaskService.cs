using APICore.Common.DTO.Request;
using APICore.Data.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace APICore.Services
{
    public interface ITaskService
    {
        Task<string> CreateAsync(CreateTaskRequest task);
        Task<object> GetAsync(int? Id);
        Task<List<UserTask>> GetbyUser(int Id);
        Task<string> RemoveAsync(int id);
        Task<string> UpdateAsync(UserTask task);
    }
}