import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{

  dataChanged = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('apple',1),
    new Ingredient('carrot',5),
    new Ingredient('cherry',3)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  onEnterIng(ingDataz: Ingredient){
    this.ingredients.push(ingDataz);
    this.dataChanged.emit(this.ingredients.slice())
  }



}
