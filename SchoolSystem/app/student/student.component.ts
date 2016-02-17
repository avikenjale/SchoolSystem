import {Component} from 'angular2/core';
import {Student} from './student';
@Component({
    templateUrl: '/app/student/student.component.html'
})

export class StudentComponent {
    public Students: Student[];
    public Student: Student;

    public ID: number = 0;
    public FirstName: string = '';
    public LastName: string = '';
    public BirthDate: string = '';
    public Gender: string = '';

    constructor() {
        this.Students = [{ ID: 1, FirstName: "Avinash", LastName: "Kenjale", BirthDate: "12-08-1982", Gender: "Male" },
            { ID: 2, FirstName: "Sampada", LastName: "Kasture", BirthDate: "10-05-1984", Gender: "Female" }];

    }

    public saveStudent() {
        this.Students.push(new Student(this.ID, this.FirstName, this.LastName, this.BirthDate, this.Gender));
    }
}