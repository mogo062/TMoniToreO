import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';
import  { User } from '../../services/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user : User;

  constructor(private userService : UserService, private router : Router, private route : ActivatedRoute) {
    this.user = userService.getUser();
  }

  ngOnInit() {
  }

  login(){
    this.userService.login(this.user);
    console.log("0 ", this.userService.isConnected());
  }

}
