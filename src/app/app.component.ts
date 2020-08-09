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
  condition = false;
  userData:any = {userName: '',
    emailID: '',
    confidential: '',
    inputData: '',
    sex: '',}

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
    this.userData.userName = this.duh.value.userData.user,
    this.userData.emailID = this.duh.value.userData.mail,
    this.userData.confidential = this.duh.value.secret,
    this.userData.inputData = this.duh.value.textContent,
    this.userData.sex = this.duh.value.gender,
    this.condition = true;
    this.duh.reset();
  }
}
