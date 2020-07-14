import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // @Input('itemz-ya') recipe: {name:string, description:string, imagePath: string}
  @Input('itemz-ya') recipe: Recipe

  constructor() { }

  ngOnInit(): void {
  }




}
