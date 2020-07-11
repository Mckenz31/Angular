import { Component, Input, OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  i:number= 0;

  constructor(private userServ: UserService, private countServ: CounterService){}

  ngOnInit(){
    this.users = this.userServ.inactiveUserz;
  }

  onSetToActive(id: number) {
    this.userServ.onSetToActive(id);
    this.countServ.inactiveToActive= this.countServ.inactiveToActive+1;
    this.i = this.countServ.inactiveToActive;
    // console.log(this.i);
  }
}
