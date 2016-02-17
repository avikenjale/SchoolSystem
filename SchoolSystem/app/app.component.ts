import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {StudentComponent} from './student/student.component';
import {TeacherComponent} from './teacher/teacher.component';
import {LoginComponent} from './security/login.component';
import {AppGlobalService} from './app.global.service';

@Component({
    selector: 'app-component',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES]    
})
@RouteConfig([
    { path: '', name: 'Login', component: LoginComponent, useAsDefault: true },
    { path: '/student', name: 'Student', component: StudentComponent },
    { path: '/teacher', name: 'Teacher', component: TeacherComponent }
])

export class AppComponent {   

    public loggedIn: boolean;

    constructor(public gs: AppGlobalService) {
        // gs is instance of GlobalService created at bootstrap
        this.loggedIn = gs.loggedIn;
    }

    logoutUser()
    {
        this.gs.logout();
        this.loggedIn = this.gs.loggedIn;
    }
}