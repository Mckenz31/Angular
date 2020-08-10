import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  reactivFrm: FormGroup;

  ngOnInit(){
    this.reactivFrm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'mail': new FormControl(null, [Validators.required , Validators.email]),
      'radio': new FormControl('male', Validators.required)
    });
  }

  onSubmit(){
    console.log(this.reactivFrm);
  }

}
