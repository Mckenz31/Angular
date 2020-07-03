import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed = true;
  @Output() navigate = new EventEmitter<string>();
  // whichone: string;

  constructor() { }

  ngOnInit(): void {
  }

  // recipeClick(){
  //   this.navigate.emit(this.whichone='recipe')
  // }
  // shoppingClick(){
  //   this.navigate.emit(this.whichone='shopping')
  // }
  onNav(navselect:string){
    this.navigate.emit(navselect)
  }
}
