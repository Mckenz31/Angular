import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  recipeData:Recipe;

  constructor(private recipServ: RecipeService) { }

  ngOnInit(): void {
    this.recipServ.recipeWasSelected.subscribe(
      (recipe: Recipe) => {
        this.recipeData = recipe;
      }
    )
  }

  onRef(data:string){
    console.log(data);
  }


}
