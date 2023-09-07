import { Component } from '@angular/core';
import { Temp } from 'src/app/models/TempModle';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent {
  tempString: string = "";
   
  someStrings: Temp[] = [];
   
  addPhone(){
      this.someStrings.push(new Temp(this.tempString));
      this.tempString ="";
  }
}



