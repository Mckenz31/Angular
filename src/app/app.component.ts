import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

  subscription = ['Basic', 'Advanced', 'Pro'];
  defaultsub = 'Advanced';

  onSubmit(f){
    console.log(f);
  }
}
