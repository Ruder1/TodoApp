import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Temp } from 'src/app/models/TempModle';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {
    @Input() currentTask:EditModel = new EditModel();
    @Output() taskChange = new EventEmitter<EditModel>();

    tempString: string = this.currentTask.task

    onTaskChange(task:string){
      this.tempString = task;
    }

    Update(){
      var edit = new EditModel;
      if(this.tempString != "")
      {
        edit.task=this.tempString;
      }
      else
      {
        edit.task=this.currentTask.task;
      }     
      edit.visible = !this.currentTask.visible;    
      this.taskChange.emit(edit)
    }

    CancelChanges(){
      var edit = new EditModel;
      edit.task = this.currentTask.task;      
      edit.visible=!this.currentTask.visible;
      this.taskChange.emit(edit)
    }
}

export class EditModel{
  visible:boolean = false;
  task:string = "";
}
