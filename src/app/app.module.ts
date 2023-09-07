import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainWindowComponent } from './components/main-window/main-window.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWindowComponent,
    
    TodoListComponent,
         EditFormComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
