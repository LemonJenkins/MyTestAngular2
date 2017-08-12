import {Component} from'@angular/core';
 import {Todo} from './todos/shared/todo';
 //import {todos} from './todos/shared/todo';


@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title: string = 'Angular 2Do';
}