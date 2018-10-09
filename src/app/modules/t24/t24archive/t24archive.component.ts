import { Component, OnInit } from '@angular/core';
import { ViewChild, ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';

import { AlertService } from  '../../../services/alert.service';
import { ModalService } from '../../../services/modal.service';

import { ModalComponent } from '../../../components/modal/modal.component';

@Component({
  selector: 'app-t24archive',
  templateUrl: './t24archive.component.html',
  styleUrls: ['./t24archive.component.css']
})
export class T24archiveComponent implements OnInit {
  modalRef: ComponentRef<ModalComponent>;
  @ViewChild('modalBox', {read: ViewContainerRef}) modalBox: ViewContainerRef;

  constructor(private alertService : AlertService, private modalService : ModalService, private ComponentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {  }


  addProcedure(){
  /*  this.alertService.alert(true, 5000, 'W', "Do you have idea ! "+new Date());
    this.showModal();
    console.log(this);*/

    let inputs = {
     bean: 'Mongi'
    }
   this.modalService.init(ModalComponent, inputs, {});
  }

  showModal() {
    if (!this.modalRef) {
      const modalComponent = this.ComponentFactoryResolver.resolveComponentFactory(ModalComponent);
      this.modalRef = this.modalBox.createComponent(modalComponent);
    }
    this.modalRef.instance.modalRef = this.modalRef;
    this.modalRef.instance.bean = {};


    this.modalRef.changeDetectorRef.detectChanges();
  //  setTimeout(() => this.destroyModal(), 5000);
  }

  destroyModal() {
      if (this.modalRef) {
        this.modalRef.destroy();
        delete this.modalRef;
      }
    }

}
