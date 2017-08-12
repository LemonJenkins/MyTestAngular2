import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './todos/shared/data.service';

import {FormsModule} from '@angular/forms';
import {TodosComponent} from './todos/todos.component';
import {TodoFormComponent} from './todos/todo-form/todo-form.component';
import {TodoListComponent} from './todos/todo-list/todo-list.component';
import {TodoItemComponent} from './todos/todo-item/todo-item.component';
import {TodoService} from './todos/shared/todo.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent,
        TodosComponent,
        TodoFormComponent,
        TodoListComponent,
        TodoItemComponent
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule {

}