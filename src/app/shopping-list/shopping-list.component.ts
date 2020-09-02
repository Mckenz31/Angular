import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] = [];
  private subscription: Subscription;

  constructor(private shopServ: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shopServ.getIngredients();
    this.subscription = this.shopServ.dataChanged.subscribe(
      (ingredient: Ingredient[]) => {
        this.ingredients = ingredient;
      }
    )
  }

  onClick(index){
    this.shopServ.editIngredient.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
