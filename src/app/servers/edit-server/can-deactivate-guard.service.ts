import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

export interface CanComponentDeactivate{
  canDeactivate: () => Observable<boolean> | Promise<boolean> |boolean;
}
//An interface is a way to define a contract on a function with respect to the arguments and their type. 
//Along with functions, an interface can also be used with a Class as well to define custom types.
// An interface is an abstract type, it does not contain any code as a class does

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return component.canDeactivate();
    }

}

