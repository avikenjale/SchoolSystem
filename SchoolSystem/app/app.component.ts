import {Component} from 'angular2/core';
import {StudentComponent} from './student/student.component';

@Component({
    selector: 'app-component',
    templateUrl: 'app/app.component.html',
    directives: [StudentComponent]
})

export class AppComponent { }