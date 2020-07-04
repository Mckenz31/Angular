import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameShop',{static: false}) nameRef: ElementRef;
  @ViewChild('amountShop', {static: false}) amountRef: ElementRef;
  @Output() shopDataz = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  addButton(){
    const namez = this.nameRef.nativeElement.value;
    const amountz = this.amountRef.nativeElement.value;
    const ingData = new Ingredient(namez, amountz);
    this.shopDataz.emit(ingData);
  }


}
