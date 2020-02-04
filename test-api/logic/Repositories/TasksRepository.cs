using logic.Interfaces;
using logic.Models;
using logic.Services;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace logic.Repositories
{
    public class TasksRepository : ITasksRepository
    {
        private readonly IDal _dal;

        public TasksRepository(IDal dal)
        {
            _dal = dal;
        }

        public bool Delete(Guid id)
        {

            var res = GetAll();
            res.Remove(res.Find(r => r.Id == id));
            _dal.Update(JsonConvert.SerializeObject(res));
            return true;
        }

        public List<Tasks> GetAll()
        {
            var res = _dal.GetAll();
            return JsonConvert.DeserializeObject<List<Tasks>>(res)
                .OrderBy(t => t.IsDone).ThenBy(t=>t.Priority).ThenBy(t=>t.Created).ToList();
        }

        public Tasks Save(Tasks tasks)
        {
            var res = GetAll();
            res.Add(tasks);
            _dal.Update(JsonConvert.SerializeObject(res));
            return tasks;
        }

        public Guid Update(Tasks tasks)
        {
            var res = GetAll();
            res.Remove(res.Find(r=>r.Id == tasks.Id));
            res.Add(tasks);
            _dal.Update(JsonConvert.SerializeObject(res));
            return tasks.Id;
        }
    }
}
