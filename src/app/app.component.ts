import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import {CounterService} from './counter.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, CounterService]
})
export class AppComponent {

//   constructor(private userSer: UserService){}

//   activeUsers: string[] = [];
//   inactiveUsers: string[] = []

//   ngOnInit(){
//     this.activeUsers = this.userSer.activeUserz;
//     this.inactiveUsers = this.userSer.inactiveUserz;
//   }




//   activeUsers = ['Max', 'Anna'];
//   inactiveUsers = ['Chris', 'Manu'];

//   onSetToInactive(id: number) {
//     this.inactiveUsers.push(this.activeUsers[id]);
//     this.activeUsers.splice(id, 1);
//   }

//   onSetToActive(id: number) {
//     this.activeUsers.push(this.inactiveUsers[id]);
//     this.inactiveUsers.splice(id, 1);
//   }
// }



}
