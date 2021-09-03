using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace APICore.Common.DTO.Request
{
    public class CreateTaskRequest
    {
        [Required]
        [MinLength(5)]
        public string Name { get; set; }
        [Required]
        public int User { get; set; }
    }
}
