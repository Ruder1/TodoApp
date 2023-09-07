import { Component,Input } from '@angular/core';
import { Temp } from 'src/app/models/TempModle';
import { NgForm } from '@angular/forms';
import { EditModel } from '../edit-form/edit-form.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() someStrings:Temp[]=[];

  currentTask:EditModel = new EditModel();
  id!:number;
  
  constructor(){
    this.currentTask.visible=false;
    this.currentTask.task="";
  }
   

  DeleteItem(id:number) {
    this.someStrings.splice(id,1);
  }

  EditItem(id:number, todoTask:string){
    this.currentTask.task = todoTask;
    this.currentTask.visible = true;
    this.id = id;
  }  

  UpdateItem(task: EditModel){
    this.someStrings[this.id].tempString=task.task;
    this.currentTask.visible = task.visible
    this.id = null!;
  }
}