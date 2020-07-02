import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  duh:any;
  @Output() oddeven = new EventEmitter<number>()
  i:number = 0;

  constructor() { }

  ngOnInit(): void {
  }



  time(){
    this.duh = setInterval(() => {
      this.oddeven.emit(this.i+1);
      this.i++;
     }, 1000);

  }

  timeDestroy(){
    clearInterval(this.duh);
  }




}
