using APICore.Common.DTO.Request;
using APICore.Data.Entities;
using APICore.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace APICore.API.Controllers
{

    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly ITaskService _taskService;

        public TaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        
        [HttpGet]
        public async Task<IActionResult> Get(int id)
        {
            var Task =await _taskService.GetAsync(id);
            return Ok(Task);
        }
        [HttpGet]
        public async Task<IActionResult> GetByUsers(int userid)
        {
            var tasks =await _taskService.GetbyUser(userid);
            return Ok(tasks);
        }
        

        
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateTaskRequest task)
        {
            var createtaskresult = await _taskService.CreateAsync(task);
            return Ok(createtaskresult);
        }

        
        [HttpPut]
        public async Task<IActionResult> UpdateTask([FromBody] UserTask task)
        {
            var updatetask = await _taskService.UpdateAsync(task);
            return Ok(updatetask);
        }

        
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
