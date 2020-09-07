import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Form, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RecipeService } from '../recipes/recipe.service'

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number;
  editMode = false;
  reactivFrm: FormGroup;

  constructor(private route: ActivatedRoute, private resipeServ: RecipeService, private router: Router) { }

  ngOnInit(){

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
      }
    );
    this.formData();
  }

  private formData(){
    let recipeName = '';
    let imagePath = '';
    let descriptz = '';
    let ingredientz = new FormArray([]);
    if(this.editMode==true){
      const recipe = this.resipeServ.getRecipz(this.id);
      recipeName = recipe.name;
      imagePath = recipe.imagePath;
      descriptz = recipe.description;
      if(recipe['ingredients']){
        for (let ingredient of recipe.ingredients){
          ingredientz.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }
    }
    this.reactivFrm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(descriptz, Validators.required),
      'ingredients': ingredientz
    });
  }

  get controls(){ //A getter! A 'get' accessor must return a value
    return (<FormArray>this.reactivFrm.get('ingredients')).controls;
  }

  addIngredient(){
    (<FormArray>this.reactivFrm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }


  onSubmit(){
    // console.log(this.reactivFrm.value);
    if(this.editMode){
      this.resipeServ.editRecipe(this.id, this.reactivFrm.value);
    }
    else{
      this.resipeServ.newRecipe(this.reactivFrm.value);
    }
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onRemove(index: number){
    (<FormArray>this.reactivFrm.get('ingredients')).removeAt(index);
  }
}
