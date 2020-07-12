import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private route: Router,
    private activRoute:ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onClick1(){
    this.route.navigate(['/servers'], {relativeTo: this.activRoute});
  }
}
