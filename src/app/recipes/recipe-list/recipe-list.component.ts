import { Component, OnInit} from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes = [];

  constructor(private recipServ: RecipeService) { }

  ngOnInit(){
    this.recipes = this.recipServ.getRecipe();
  }

}
