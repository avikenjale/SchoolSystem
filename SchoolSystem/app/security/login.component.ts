import {Component} from 'angular2/core';
import {AppGlobalService} from './../app.global.service';
import {CanActivate, ComponentInstruction} from 'angular2/router';
import {isLoggedIn} from './../is-logged-in';

@Component({
    templateUrl: '/app/security/login.component.html' 
})
//@CanActivate((next: ComponentInstruction, previous: ComponentInstruction) => {
//    return isLoggedIn(next, previous);
//})

export class LoginComponent {

    private globalService: AppGlobalService;

    constructor(globalService: AppGlobalService) {
        this.globalService = globalService;
    }    

    public loginUser()
    {
        this.globalService.login();
    }
}
