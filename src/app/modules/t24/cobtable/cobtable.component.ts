import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cobtable',
  templateUrl: './cobtable.component.html',
  styleUrls: ['./cobtable.component.css']
})
export class CobtableComponent implements OnInit {

  @Input()
  private title : string = 'NO TITLE DEFINED';
  @Input()
  private data : any = []

  constructor() { }

  ngOnInit() {
  }

}
