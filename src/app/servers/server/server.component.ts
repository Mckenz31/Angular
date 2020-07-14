import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private activRoute:ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activRoute.data.subscribe(
      (data: Data) => {
        this.server = data['servez'];
      }
    )
  }
  //   const id=+this.activRoute.snapshot.params['id'];
  //   //id needs to be a number but as it is obtained from the URL(the contents of the url is a string)
  //   //hence the id is a string and it needs to be converted to a numeral
  //   //hence the + sign is added
  //   this.server = this.serversService.getServer(id);
  //   this.activRoute.params.subscribe(
  //     (params: Params) => {
  //       this.server = this.serversService.getServer(+params['id'])
  //       //+ added before params
  //     }
  //   )
  // }

  editPage(){
    this.router.navigate(['edit'], {relativeTo: this.activRoute, queryParamsHandling: 'preserve'});
  }

}
