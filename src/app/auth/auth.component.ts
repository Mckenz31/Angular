import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
  // styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  loginMode: boolean = true;

  onSwitch(){
    this.loginMode = !this.loginMode;
  }

  onSubmit(f:NgForm){
    console.log(f.value);
    f.reset();
  }
}
