﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace APICore.Data.Entities
{
    public class UserTask
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool State { get; set; }
        public User User { get; set; } 
    }
}
