import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AppGlobalService {
    public loggedIn: boolean;

    constructor() {
        this.loggedIn = false;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }

    check() {
        return Observable.of(this.loggedIn);
    }
}