import { Component, Input, OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';


@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  // @Input() users: string[];

  constructor(private userSer: UserService, private countServ: CounterService){}

  users: string[] = [];
  i:number= 0;

  ngOnInit(){
    this.users = this.userSer.activeUserz;
  }

  onSetToInactive(id: number) {
    this.userSer.onSetToInactive(id);
    this.countServ.activeToInactive= this.countServ.activeToInactive+1;
    this.i=this.countServ.activeToInactive;

    // this.userSetToInactive.emit(id);
  }
}
