import { Component,ElementRef, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from '../../services/modal.service';
//import { procArch } from '../../services/arch.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input()
  title : string="";
  @Input()
  beans : any = [];
  @Output()
  onClose : EventEmitter<null> = new EventEmitter<null>();
  @Input()
  keys : any;


  constructor( private elementRef : ElementRef, private modalService : ModalService) {  }

  ngOnInit() {
    console.log("beans : ", this.beans);
  //  if(this.beans.length != 0){
    //  this.keys = Object.keys(this.beans[0]);
    //  console.log(Object.keys(this.beans[0]));
      //console.log(this.keys);
    //}
  }

  ngOnDestroy(){  }

  close(){
    console.log(this);
    this.onClose.emit(null);
  }


}
