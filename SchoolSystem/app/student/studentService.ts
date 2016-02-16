import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Student} from './student';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class StudentService {
    constructor(private http: Http) {
    }

    public getStudents() {
        return this.http.get("http://localhost:22385/api/Students/")
            .map(res => <Student[]>res.json())
            .catch(this.logAndPassOn);
    }

    public getStudent(id: number)
    {
        return this.http.get("http://localhost:22385/api/Students/" + id)
            .map(res => <Student>res.json())
            .catch(this.logAndPassOn);
    }

    public addStudent(id: number, firstName: string, lastName: string, birthDate: string, gender: string) {
        let student = JSON.stringify({ ID: id, FirstName: firstName, LastName: lastName, BirthDate: birthDate, Gender: gender });

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post("http://localhost:22385/api/Students/", student, { headers: headers })
            .map(res => <Student[]>res.json())
            .catch(this.logAndPassOn);
    }

    public logAndPassOn(error: Error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error);
    }
}