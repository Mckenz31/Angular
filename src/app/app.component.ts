import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  recievedData:string = 'recipe';

  checkEvent(databro){
    this.recievedData=databro;
    // console.log(this.recievedData);
  }
}
