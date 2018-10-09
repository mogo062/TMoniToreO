import { Component,ElementRef, OnInit, OnDestroy, Input } from '@angular/core';

import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  private element: any;
  private hide: boolean = false;

  @Input()
  modalRef : any;
  @Input()
  bean : any;



  constructor(private el : ElementRef, private modalService : ModalService) {
    this.element = el;
  }

  ngOnInit() {
  }

  ngOnDestroy(){

  }

  close(){
    this.modalService.destroy();
    /*
    console.log(this.modalRef);
    if (this.modalRef) {
     this.modalRef.destroy();
      delete this.modalRef;
    }
    */
  }


}
