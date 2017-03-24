using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PointwestAPI.Core.Dtos
{
    public class CustomerDto
    {
        public int Id { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public System.DateTime BirthDate { get; set; }
    }
}