import { Component,ElementRef, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'archprocedure',
  templateUrl: './archprocedure.component.html',
  styleUrls: ['./archprocedure.component.css']
})
export class ArchprocedureComponent implements OnInit {

  @Input()
  title : string="";
  @Input()
  beans : any = [];
  @Output()
  onClose : EventEmitter<null> = new EventEmitter<null>();
  @Input()
  keys : any;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.title = this.route.snapshot.data.title;
    this.keys = this.route.snapshot.data.keys;
    this.beans = this.route.snapshot.data.beans;
    console.log(this.beans);
    console.log(this);
  }

}
