import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  reactivForm: FormGroup;
  forbiddenEmailList = ['bunny@gmail.com', 'macnchez@gmail.com'];

  ngOnInit(){
    this.reactivForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, CustomValidators.forbiddenName], CustomValidators.asyncForbiddenName),
        'email': new FormControl(null, [Validators.email, Validators.required], this.forbiddenEmails.bind(this))
      }),
      'dropdown': new FormControl('critical')
    })
  }

  onSubmit(){
    console.log(this.reactivForm.value);
    this.reactivForm.reset();
  }

  forbiddenName(control: FormControl): {[s:string]: boolean} {
    if(control.value === 'test'){
      return {'nameerr': true}
    }
    return null;
  }

  asyncForbiddenName(control : FormControl): Promise<any> | Observable<any>{
    const prmise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'mck'){
          resolve({'Vipname': true});
        }else{
          resolve(null);
        }
      }, 2000);
    });
    return prmise;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Observable<any>(observer => {
      setTimeout(() => {
        const email = control.value ? control.value.toLowerCase() : '';
        if (this.forbiddenEmailList.indexOf(email) !== -1) {
          observer.next({forbiddenEmail: true});
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 2000);
    });
  }
}

