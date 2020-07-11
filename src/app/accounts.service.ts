import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AccountsService{
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusAlert = new EventEmitter<string>();

  constructor(private logService: LoggingService){}



  onAdd(name: string, status:string){
    this.accounts.push({name: name, status:status});
    this.logService.StatusUpdate(status);
  }

  onChange(id:number, newStatus:string){
    this.accounts[id].status = newStatus,
    this.logService.StatusUpdate(status);
  }


}
