import {Recipe} from './recipe.model';
import { Injectable } from '@angular/core';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { env} from './../../environments/env';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams} from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class RecipeService{

  recipeChanged = new Subject<Recipe[]>();

  private fireserver:any = env.dataAPIUrl;
  private path:any = '/recipes.json';

  private recipes: Recipe[] = [
    // new Recipe('Salad',
    // 'Raw salid for strong people',
    // 'https://hips.hearstapps.com/hmg-prod/images/avocado-salad-1524672116.png',
    // [
    //   new Ingredient('Guava', 3),
    //   new Ingredient('Corn', 2),
    //   new Ingredient('Tomato', 2)
    // ]),
    // new Recipe('Pizza',
    // 'You can never say no to it',
    // 'https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/16:9/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg' ,
    // [
    //   new Ingredient('Chicken', 1),
    //   new Ingredient('Flour', 2),
    //   new Ingredient('sauce', 1)
    // ])
  ];

  constructor(private shopServ: ShoppingListService,private http: HttpClient, private authServ: AuthService){}

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
    this.shopServ.onShop(ingridient);
  }

  putData(){
    return this.http.put(this.fireserver + this.path, this.recipes).subscribe();
  }

  fetchData(){
    return this.authServ.user.pipe(take(1),exhaustMap(user => {
      return this.http.get<Recipe[]>(this.fireserver + this.path,{
        params: new HttpParams().set('auth', user.token)
      })
    }),map(response => {
      return response.map(recipe => {
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
      })
    }),tap(responze => {
      this.recipes = responze;
      this.recipeChanged.next(this.recipes.slice());
    })
    )

  }

}
