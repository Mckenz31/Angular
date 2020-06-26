import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  whoknows = false;
  randomText = "Server is not created";
  serverID = "";
  enteredText = "";

  constructor() {
    setTimeout(()=> {
      this.whoknows = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onListenTo(event: Event){
    /*console.log(event);
    If we check the console, we should scroll down -> target -> value
    In value -> you can see the data you typed.
    Inorder to directly access the data we use-> this.enteredText= event.target.value;
    But it is neccessary to specify that it is HTMLInputElement */

    this.enteredText = (<HTMLInputElement>event.target).value;
  }

  onClickduh(){
    this.randomText = "Server was successfully created in the name:" + this.serverID
  }
}
