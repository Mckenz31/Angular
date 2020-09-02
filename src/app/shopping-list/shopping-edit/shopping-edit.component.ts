import { Component, OnInit,OnDestroy, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  @ViewChild('f', { static: false }) formData: NgForm;
  editMode = false;
  editNumber: number;
  editedItem: Ingredient;
  constructor(private shopServ: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shopServ.editIngredient.subscribe((index) => {
      this.editMode = true;
      this.editNumber = index;
      this.editedItem = this.shopServ.editIngredienz(index);
      this.formData.setValue({
        username: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }

  onSubmit(form:NgForm){
    const data = form.value
    const ingData = new Ingredient(data.username, data.amount);
    if(this.editMode){
      this.shopServ.onUpdateIng(this.editNumber ,ingData);
    }else{
      this.shopServ.onEnterIng(ingData);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.formData.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shopServ.deleteData(this.editNumber);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
