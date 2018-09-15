import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
//  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  private return: string = '';

  constructor(private userService : UserService, private router :  Router, private route : ActivatedRoute) { }

  ngOnInit() {

  }


  logout(){
    console.log(this);
    this.userService.logout();
  }

  go(page : string){
    this.router.navigateByUrl(page);
  }
}
