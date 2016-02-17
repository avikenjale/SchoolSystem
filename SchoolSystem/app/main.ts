import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component';
import {AppGlobalService} from './app.global.service';
import {appInjector} from './app-injector';
import {provide, ComponentRef} from 'angular2/core';

bootstrap(AppComponent, [ROUTER_PROVIDERS, AppGlobalService])
    .then((appRef: ComponentRef) => {
        // store a reference to the injector
        appInjector(appRef.injector);
    });