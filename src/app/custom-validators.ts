import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators{

  // EmailList = ['bunny@gmail.com', 'macnchez@gmail.com'];

  static forbiddenName(control: FormControl): {[s:string]: boolean} {
    if(control.value === 'test'){
      return {'nameerr': true}
    }
    return null;
  }

  static asyncForbiddenName(control : FormControl): Promise<any> | Observable<any>{
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

  // static forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
  //   return new Observable<any>(observer => {
  //     setTimeout(() => {
  //       const email = control.value ? control.value.toLowerCase() : '';
  //       if (this.EmailList.indexOf(email) !== -1) {
  //         observer.next({forbiddenEmail: true});
  //       } else {
  //         observer.next(null);
  //       }
  //       observer.complete();
  //     }, 2000);
  //   });
  // }
}
