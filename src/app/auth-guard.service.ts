import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authSer: AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authSer.isAuthenticated().then(
        (authentication: boolean) => {
          if(authentication){
            return true;
          }
          else{
            this.router.navigate(['/']);
          }
        }
      );
  }
}
