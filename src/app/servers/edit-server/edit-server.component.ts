import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  random1: any;
  random2: any;

  constructor(private serversService: ServersService, private activRoute: ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    //To get the queryParams and fragment which is on the URL
    console.log(this.activRoute.snapshot.queryParams);
    console.log(this.activRoute.snapshot.fragment);
    this.random1=this.activRoute.queryParams;
    console.log(this.random1.value);
    this.random2=this.activRoute.fragment;
    console.log(this.random2.value);
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
