import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;


  constructor(private recipServ: RecipeService, private activServ: ActivatedRoute) { }

  ngOnInit(){
    this.activServ.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipServ.accessById(this.id);
      }
    )
  }

  onToShop(){
    this.recipServ.sendToShop(this.recipe.ingredients);
  }

}
