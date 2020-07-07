import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template
  styleUrls: ['./app.component.css'] ,

  //This is styling using an inline template
  /*styles: [`
  h3{
    color: pink;
  }
  `] */

})
export class AppComponent {

  onlyOdd = true;
  oddNumbers=[1,3,5];
  evenNumbers=[2,4]
  value = 100;
}
