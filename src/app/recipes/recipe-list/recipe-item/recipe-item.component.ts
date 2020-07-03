import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // @Input('itemz-ya') recipe: {name:string, description:string, imagePath: string}
  @Input('itemz-ya') recipe: Recipe
  randomData:string;
  @Output('recipeStuff') recipePic = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  onImageTap(){
    this.recipePic.emit();
    // console.log(this.randomData);

  }


}
