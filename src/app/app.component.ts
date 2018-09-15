import { Component, OnInit } from '@angular/core';

import { UserService } from './services/user.service';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MoniToreO Supervision';

  constructor(private userService: UserService, private menuService : MenuService){
  //  console.log(menuService.getMenu());
   }

   ngOnInit() {
   }

}
