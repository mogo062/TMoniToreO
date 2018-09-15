import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  private url : string = '';

  constructor(private location : Location, private router : Router) { }

  ngOnInit() {
    this.url = this.router.url;
  }

  back() {

    console.log(this);
    this.location.back();
  }
}
