import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') duh:NgForm
  defopt = 'pet';
  textdetail = '';
  genders: any = ['male', 'female'];

  suggestUserName() {

    // this.duh.setValue({
    //   userData: {
    //     user: 'Superuser',
    //     mail: 'rosita@hotmail.com'
    //   },
    //   secret: 'teacher',
    //   textContent: 'Rosita',
    //   gender: 'female'
    // });

    this.duh.form.patchValue({
      userData: {
        user: 'PatchUser'
      }
    })
  }



  onSubmit(){
    console.log(this.duh);
  }
}
