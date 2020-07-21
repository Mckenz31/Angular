import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  constructor() { }

  ngOnInit() {
    this.sub = interval(1000).subscribe(data=>{
      console.log(data);
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
