import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData} from './auth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private authServ: AuthService){}

  loginMode: boolean = true;
  isLoading: boolean = false;
  errorMessage;string;

  onSwitch(){
    this.loginMode = !this.loginMode;
  }

  onSubmit(f:NgForm){
    if(f.invalid){
      return
    }
    const mail = f.value.email;
    const pass = f.value.password;
    this.isLoading = true;

    let authObs : Observable<AuthResponseData>;

    if(this.loginMode){
      authObs = this.authServ.login(mail, pass)
    }else{
      authObs = this.authServ.signUp(mail, pass)
    }

    authObs.subscribe(response => {
      console.log(response);
      this.isLoading = false;
    }, error => {
      console.log(error);
      this.isLoading = false;
      this.errorMessage=error;
    });


    f.reset();
  }
}
