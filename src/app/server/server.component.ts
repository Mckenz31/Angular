import {Component} from '@angular/core';

@Component ({
  selector: 'app-server' ,
  templateUrl: './server.component.html',
  styles: [`
  .anyclassname{
   color: white;
  }
`]
})

export class ServerComponent{

  serverID2: string = '';




  constructor(){
    this.serverID2 = Math.random() > 0.5 ? 'online': 'offline';
  }



  getDecide(){
    return this.serverID2 === 'online' ? 'green' : 'red';
  }

}


