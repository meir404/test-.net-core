using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using logic.Interfaces;
using logic.Models;
using logic.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace test_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly ITasksRepository _tasksRepository;

        public TasksController(ITasksRepository tasksRepository)
        {
            _tasksRepository = tasksRepository;
        }

        [HttpPost]
        public Tasks Save(Tasks task)
        {
            return _tasksRepository.Save(task);
        }
        [HttpPut]
        public Guid Update(Tasks task)
        {
            task.Updated = DateTime.Now;
            return _tasksRepository.Update(task);
        }
        [HttpDelete]
        public bool Delete(Guid id)
        {
            return _tasksRepository.Delete(id);
        }
        [HttpGet]
        public List<Tasks> GetAll()
        {
            return _tasksRepository.GetAll();
        }

    }
}