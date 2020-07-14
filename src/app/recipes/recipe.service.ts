import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{

  recipeWasSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Salad', 'Raw salid for strong people', 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
    new Recipe('Pizza', 'You can never say no to it', 'https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/16:9/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg')
  ];

  getRecipe(){
    return this.recipes.slice()
  }



}
