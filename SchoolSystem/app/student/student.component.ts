import {Component} from 'angular2/core';
import {Student} from './Student';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {StudentService} from './studentService';
import {Observable} from 'rxjs/Observable';;

@Component({
    templateUrl: 'app/student/student.component.html',
    providers: [HTTP_PROVIDERS, StudentService]
})

export class StudentComponent {

    public Students: Student[];    
    public MyStudent = new Student();

    constructor(private studentService: StudentService) {
        this.getStudents();
    }

    private getStudents() {
        this.studentService.getStudents()
            .subscribe(students => this.Students = students, error => this.studentService.logAndPassOn);
    }

    public SaveStudent() {
        this.studentService.addStudent(this.MyStudent.ID, this.MyStudent.FirstName, this.MyStudent.LastName, this.MyStudent.BirthDate, this.MyStudent.Gender)
            .subscribe(students => this.Students = students, error => this.studentService.logAndPassOn);
    }

    public selectStudent(id: number)
    {
        this.studentService.getStudent(id)
            .subscribe(stundent => this.MyStudent = stundent, error => this.studentService.logAndPassOn);
    }
}