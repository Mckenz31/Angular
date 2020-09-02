import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService{

  dataChanged = new Subject<Ingredient[]>();
  editIngredient = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('apple',1),
    new Ingredient('carrot',5),
    new Ingredient('cherry',3)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  editIngredienz(index){
    return this.ingredients[index];
  }

  onEnterIng(ingDataz: Ingredient){
    this.ingredients.push(ingDataz);
    this.dataChanged.next(this.ingredients.slice())
  }

  onUpdateIng(index: number,ingDatas: Ingredient){
    this.ingredients[index] = ingDatas;
    this.dataChanged.next(this.ingredients.slice());

  }

  onShop(ingridient: Ingredient[]){
    // this.ingredients = ingridient;
    this.ingredients.push(...ingridient);
    this.dataChanged.next(this.ingredients.slice());
  }

  deleteData(index: number){
    this.ingredients.splice(index, 1);
    this.dataChanged.next(this.ingredients.slice());
  }


}
