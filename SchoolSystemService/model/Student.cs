using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SchoolSystemService.model
{
    public class Student
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string  LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public string Gender { get; set; }
    }
}