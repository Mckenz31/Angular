import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameShop',{static: false}) nameRef: ElementRef;
  @ViewChild('amountShop', {static: false}) amountRef: ElementRef;

  constructor(private shopServ: ShoppingListService) { }

  ngOnInit(): void {
  }

  addButton(){
    const namez = this.nameRef.nativeElement.value;
    const amountz = this.amountRef.nativeElement.value;
    const ingData = new Ingredient(namez, amountz);
    this.shopServ.onEnterIng(ingData);
    // this.shopDataz.emit(ingData);
  }


}
