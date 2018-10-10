import { Component,ElementRef, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input()
  modalRef : any;
  @Input()
  bean : any;
  @Output()
  onClose : EventEmitter<null> = new EventEmitter<null>();



  constructor(private elementRef : ElementRef, private modalService : ModalService) {  }

  ngOnInit() { }

  ngOnDestroy(){  }

  close(){
    this.onClose.emit(null);
    //this.modalService.destroy();
    /*
    console.log(this.modalRef);
    if (this.modalRef) {
     this.modalRef.destroy();
      delete this.modalRef;
    }
    */
  }


}
