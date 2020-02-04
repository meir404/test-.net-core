using System;

namespace logic.Models
{
    public class Tasks
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime Created { get; set; } = DateTime.Now;
        public DateTime Updated { get; set; }
        public bool Active { get; set; } = true;
        public EnumPriorities Priority { get; set; }
        public bool IsDone { get; set; } = false;
    }
}