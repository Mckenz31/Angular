import {Recipe} from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{

  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Salad',
    'Raw salid for strong people',
    'https://hips.hearstapps.com/hmg-prod/images/avocado-salad-1524672116.png',
    [
      new Ingredient('Guava', 3),
      new Ingredient('Corn', 2),
      new Ingredient('Tomato', 2)
    ]),
    new Recipe('Pizza',
    'You can never say no to it',
    'https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/16:9/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg' ,
    [
      new Ingredient('Chicken', 1),
      new Ingredient('Flour', 2),
      new Ingredient('sauce', 1)
    ])
  ];

  constructor(private shopServ: ShoppingListService){}

  getRecipe(){
    return this.recipes.slice()
  }

  getRecipz(index:number){
    return this.recipes[index];
  }

  newRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  editRecipe(index:number, recipe: Recipe){
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

  accessById(index:number){
    return this.recipes[index];
  }

  sendToShop(ingridient: Ingredient[]){
    this.shopServ.onShop(ingridient)
  }


}
