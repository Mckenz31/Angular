import { Component, OnInit, Input, DoCheck} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input('evie') evenElement:any;
  evenbro:number;

  constructor() {

  }

  ngOnInit(): void {
  }

}
