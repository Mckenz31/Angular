import { Component, OnInit, OnDestroy } from '@angular/core';
import {  ActivatedRoute, Params } from '@angular/router';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  // paramsSub: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    // this.paramsSub = this.route.params.subscribe(
    this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
    }

  // ngOnDestroy(){
  //   this.paramsSub.unsubscribe();
  // }

  //params - Is an Route Observables, so Angular will destroy it after subsicription, hence we do not need to use ngOnDestroy





}
