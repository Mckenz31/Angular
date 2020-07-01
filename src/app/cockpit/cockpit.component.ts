import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('newServerContent') ServerContent: ElementRef


  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(ServerName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: ServerName.value,
      serverContent: this.ServerContent.nativeElement.value
    });
  }


  onAddBlueprint(ServerName: HTMLInputElement) {
    // console.log(this.ServerContent.nativeElement.value);
    this.blueprintCreated.emit({
      serverName: ServerName.value,
      serverContent: this.ServerContent.nativeElement.value
    });
  }
}
