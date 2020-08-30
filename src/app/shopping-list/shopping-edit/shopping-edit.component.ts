import { Component, OnInit} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shopServ: ShoppingListService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    const data = form.value
    const ingData = new Ingredient(data.username, data.amount);
    this.shopServ.onEnterIng(ingData);
  }

}
