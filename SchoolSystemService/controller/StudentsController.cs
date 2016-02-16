using SchoolSystemService.model;
using System;
using System.Collections.Generic;
using System.Globalization;
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

            _students.Add(new Student() { ID = 1, FirstName = "Avinash", LastName = "Kenjale", BirthDate = new DateTime(1982,12,08).ToString("yyyy-MM-dd", CultureInfo.InvariantCulture), Gender = "Male" });
            _students.Add(new Student() { ID = 2, FirstName = "Sampada", LastName = "Kasture", BirthDate = new DateTime(1984,10,05).ToString("yyyy-MM-dd", CultureInfo.InvariantCulture), Gender = "Female" });
            _students.Add(new Student() { ID = 3, FirstName = "Aniket", LastName = "Kenjale", BirthDate = Convert.ToDateTime("04-17-1987").ToString("yyyy-MM-dd", CultureInfo.InvariantCulture), Gender = "Male" });
            _students.Add(new Student() { ID =4, FirstName = "Vishwapriya", LastName = "Chandratre", BirthDate = Convert.ToDateTime("05-08-1990").ToString("yyyy-MM-dd", CultureInfo.InvariantCulture), Gender = "Female" });
        }

        // GET: api/Students
        public IEnumerable<Student> Get()
        {
            return Students;
        }

        // GET: api/Students/5
        public Student Get(int id)
        {
            IEnumerable<Student> student = Students.Where(s => s.ID == id);
            return student.ElementAtOrDefault(0);           

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
