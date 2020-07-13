import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  gotUpdated= false;

  constructor(private serversService: ServersService, private activRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    const id = +this.activRoute.snapshot.params['id']
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    //To get the queryParams and fragment which is on the URL
    console.log(this.activRoute.snapshot.queryParams);
    console.log(this.activRoute.snapshot.fragment);
    this.activRoute.queryParams.subscribe(
      (queryParams:Params) => {
        this.allowEdit = queryParams['queryParamstry'] === '1' ? true: false;
      }
    )
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.gotUpdated=true;
    this.route.navigate(['../'], {relativeTo: this.activRoute});
  }

  canDeactivate(): Observable<boolean> |Promise<boolean> | boolean{
    if(!this.allowEdit){
      return true;
    }
    if((this.serverName!==this.server.name || this.serverStatus!==this.server.status) && (!this.gotUpdated)){
      return confirm('Are you sure you wanna leave before updating your changes')
    }
    else{
      return true;
    }
  }


}
