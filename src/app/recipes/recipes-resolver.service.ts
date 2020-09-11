import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RecipeResolver implements Resolve<Recipe> {

  constructor(private recipeServ: RecipeService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const check = this.recipeServ.getRecipe();
    if(check.length === 0){
      return this.recipeServ.fetchData();
    }
    else{
      return check;
    }
  }
}
