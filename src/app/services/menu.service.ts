import { Injectable } from '@angular/core';
import { MenuLink } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private linksMenu : MenuLink[] = [];
  constructor() { }

  setMenu(): void{
    this.linksMenu = [];
    this.linksMenu.push(new MenuLink('./xxx', 'active', 'T24 Dashboard', 'home'));
    this.linksMenu.push(new MenuLink('./t24/cobmonitor', 'active', 'Cob Monitor', 'user'));
    this.linksMenu.push(new MenuLink('./electric', 'active', 'Electric', 'bolt'));
    this.linksMenu.push(new MenuLink('./poison', 'active', 'Poison', 'sad-face'));
    this.linksMenu.push(new MenuLink('./grass', 'active', 'Grass', 'bug'));
  }

  getMenu() {
    return this.linksMenu;
  }

}
