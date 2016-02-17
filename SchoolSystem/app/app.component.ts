import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {StudentComponent} from './student/student.component';
import {TeacherComponent} from './teacher/teacher.component';

@Component({
    selector: 'app-component',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
    @RouteConfig([
        { path: '/student', name: 'Student', component: StudentComponent },
    { path: '/teacher', name: 'Teacher', component: TeacherComponent }
])

export class AppComponent { }