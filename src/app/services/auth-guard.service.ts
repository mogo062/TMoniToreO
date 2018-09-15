import { Injectable } from '@angular/core';

import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router : Router, private userService : UserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("0 " ,this.userService.isConnected());

    if(this.userService.isConnected()) {
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams : {
          //return : state.url
        }
      });
      return false;
    }
  }
}
