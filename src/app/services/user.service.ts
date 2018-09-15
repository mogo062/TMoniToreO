import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user.model';
import { SessionStorageService } from './session-storage.service';
import { MenuService } from './menu.service';

let state = false;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user : User ;

  constructor(private router : Router, private sessionStorageService : SessionStorageService, private menuService: MenuService) {
    this.user = sessionStorageService.get("user", new User());
    this.menuService.setMenu(); // add to initialize menu if all web site is refreshed

  }


  isConnected(){
    //console.log("1111 ", this.user.isConnected);
    return this.user.isConnected;
  }

  login(newUser : User) {
    if (newUser){
      if(newUser.username && (newUser.username.trim() !='') && newUser.password && (newUser.password.trim() != '')){
        newUser.isConnected = true;
        this.sessionStorageService.set('user', newUser);
        this.user = newUser;
        this.menuService.setMenu();   /// to be update with menu from database by user profile
        this.router.navigateByUrl('');
      }
    }

  }

  logout(){
    this.sessionStorageService.remove('user');
    this.user = new User();

    this.router.navigateByUrl('login');
  }

  getUser() {
    return this.user;
  }



}
