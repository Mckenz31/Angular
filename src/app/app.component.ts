import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  reactivFrm: FormGroup;
  forbi = ['Pamala', 'Anna'];

  ngOnInit(){
    this.reactivFrm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenVaulidator.bind(this)]),
      'mail': new FormControl(null, [Validators.required , Validators.email]),
      }),
      'radio': new FormControl('male', Validators.required),
      'hobbies': new FormArray([])
    });
  }

  onSubmit(){
    console.log(this.reactivFrm);
  }

  onAddHobby(){
    const controls = new FormControl(null, Validators.required);
    (<FormArray>this.reactivFrm.get('hobbies')).push(controls);
  }

  get controls(){
    return (<FormArray>this.reactivFrm.get('hobbies')).controls;
    // return (this.reactivFrm.get('hobbies') as FormArray).controls; -- SAME AS THE PREVIOUS LINE OF CODE
  }

  forbiddenVaulidator(control: FormControl): {[s:string]: boolean}{
    if(this.forbi.indexOf(control.value) !== -1){
      return {'id': true};
    }
    return null;
  }

}
