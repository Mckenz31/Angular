import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  toggle = false;
  toggleArray = [];

  constructor() {

  }

  onClickBuddy(){
    this.toggle = !this.toggle;
    this.toggleArray.push(new Date);
  }


}
