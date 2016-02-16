using SchoolSystemService.model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SchoolSystemService.controller
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class StudentsController : ApiController
    {
        private static List<Student> _students;

        public static List<Student> Students
        {
            get
            {
                if (_students == null)
                {
                    FillStudents();
                }
                return _students;
            }           
        }

        private static void FillStudents()
        {
            _students = new List<Student>();

            _students.Add(new Student() { ID = 1, FirstName = "Avinash", LastName = "Kenjale", BirthDate = Convert.ToDateTime("12-08-1982"), Gender = "Male" });
            _students.Add(new Student() { ID = 2, FirstName = "Sampada", LastName = "Kasture", BirthDate = Convert.ToDateTime("10-05-1984"), Gender = "Female" });
            _students.Add(new Student() { ID = 3, FirstName = "Aniket", LastName = "Kenjale", BirthDate = Convert.ToDateTime("04-17-1987"), Gender = "Male" });
            _students.Add(new Student() { ID =4, FirstName = "Vishwapriya", LastName = "Chandratre", BirthDate = Convert.ToDateTime("05-08-1990"), Gender = "Female" });
        }

        // GET: api/Students
        public IEnumerable<Student> Get()
        {
            return Students;
        }

        // GET: api/Students/5
        public IEnumerable<Student> Get(int id)
        {
            return Students.Where(s => s.ID == id);
        }        

        // POST: api/Students
        public IEnumerable<Student> Post([FromBody]Student value)
        {
            Students.Add(value);
            return Students;
        }

        // PUT: api/Students/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Students/5
        public void Delete(int id)
        {
        }
    }
}
