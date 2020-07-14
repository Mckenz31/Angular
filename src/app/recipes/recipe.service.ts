import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{

  recipeWasSelected = new EventEmitter<Recipe>();

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

  getRecipe(){
    return this.recipes.slice()
  }



}
