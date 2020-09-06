import { Component, OnInit} from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes = [];

  constructor(private recipServ: RecipeService, private router: Router,
    private activRoute: ActivatedRoute) { }

  ngOnInit(){
    this.recipServ.sendRecipe.subscribe(
      (recipe: Recipe[]) => {
        this.recipes = recipe;
      }
    )
    this.recipes = this.recipServ.getRecipe();
  }
  newRecipe(){
    this.router.navigate(['new'], {relativeTo: this.activRoute});
  }

}
