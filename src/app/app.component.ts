import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];

  onServerAdded(serverData: {serverName: string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }


  onBlueprintAdded(serverData: {serverName: string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onChange(){
    this.serverElements[0].name = 'changed'
  }

  onDestroy(){
    this.serverElements.splice(0,1);
  }


}
