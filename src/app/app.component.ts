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

  oddarray= [];
  evenarray = [];
  numeral:any;

  onIncrement(inputData:number){
    if(inputData%2==1){
      this.numeral=inputData;
      this.oddarray.push(this.numeral);
    }
    else{
      this.numeral=inputData;
      this.evenarray.push(this.numeral);
    }
    // this.numeral=inputData;
    // this.numeral=this.numeral%2;
    // this.numeral="odd/even"
    // this.arraybro.push(this.numeral);
  }


}
