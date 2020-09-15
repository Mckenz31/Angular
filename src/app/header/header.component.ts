import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  subscribe: Subscription;
  isAuthenticated: boolean = false;

  constructor(private recipeServ: RecipeService, private authServ: AuthService){}

  ngOnInit(){
    this.subscribe = this.authServ.user.subscribe(userResp => {
      this.isAuthenticated = !!userResp
      // console.log(!userResp);
      // console.log(!!userResp);
    })
  }

  collapsed = true;

  onSave(){
    this.recipeServ.putData();
  }

  onFetch(){
    this.recipeServ.fetchData().subscribe();
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }
}
