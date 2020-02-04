using logic.Models;
using System;
using System.Collections.Generic;

namespace logic.Interfaces
{
    public interface ITasksRepository
    {
        List<Tasks> GetAll();
        Tasks Save(Tasks tasks);
        Guid Update(Tasks tasks);
        bool Delete(Guid id);

    }
}