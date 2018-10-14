import { Component, OnInit } from '@angular/core';
import { ViewChild, ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';

import { AlertService } from  '../../../services/alert.service';
import { ModalService } from '../../../services/modal.service';

import { ArchService } from '../../../services/arch.service';

import { ModalComponent } from '../../../components/modal/modal.component';

@Component({
  selector: 'app-t24archive',
  templateUrl: './t24archive.component.html',
  styleUrls: ['./t24archive.component.css']
})
export class T24archiveComponent implements OnInit {
  modalRef: ComponentRef<ModalComponent>;
  @ViewChild('modalBox', {read: ViewContainerRef}) modalBox: ViewContainerRef;

  constructor(private alertService : AlertService, private modalService : ModalService, private archService : ArchService, private ComponentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {  }


  addProcedure(){
    this.archService.getT24ArchiveProcedure().subscribe(success => {
        if (!this.modalRef) {
          const modalComponent = this.ComponentFactoryResolver.resolveComponentFactory(ModalComponent);
          this.modalRef = this.modalBox.createComponent(modalComponent);
        }
        this.modalRef.instance.title="Add Archiving Procedure";
        this.modalRef.instance.keys=["id", "procName", "procLabel", "retention", "periority","session", "executed", "validated","archDate"];
        this.modalRef.instance.beans = success;
        this.modalRef.instance.onClose.subscribe((event : any) => {
          this.destroyModal();
        });
        this.modalRef.changeDetectorRef.detectChanges();
      }, error => {
        console.log(error);
        this.alertService.alert(true, 5000, 'D', new Date()+" - "+error.message);
        return [];
    });
  //  console.log(this);
  }

  addDocument(){
      this.archService.getT24ArchiveDocument().subscribe(success => {
          if (!this.modalRef) {
            const modalComponent = this.ComponentFactoryResolver.resolveComponentFactory(ModalComponent);
            this.modalRef = this.modalBox.createComponent(modalComponent);
          }
          this.modalRef.instance.title="Add Archiving Document";
          this.modalRef.instance.keys=["id", "name", "format"];
          this.modalRef.instance.beans = success;
          this.modalRef.instance.onClose.subscribe((event : any) => {
            this.destroyModal();
          });
          this.modalRef.changeDetectorRef.detectChanges();
        }, error => {
          console.log(error);
          this.alertService.alert(true, 5000, 'D', new Date()+" - "+error.message);
          return [];
      });
  }

  addUproc(){
    this.archService.getT24ArchiveUproc().subscribe(success => {
      console.log(success);
        if (!this.modalRef) {
          const modalComponent = this.ComponentFactoryResolver.resolveComponentFactory(ModalComponent);
          this.modalRef = this.modalBox.createComponent(modalComponent);
        }
        this.modalRef.instance.title="Add Archiving Uproc";
        this.modalRef.instance.keys=["id", "session", "uproc", "ordre", "procArch.procName"];
        this.modalRef.instance.beans = success;
        this.modalRef.instance.onClose.subscribe((event : any) => {
          this.destroyModal();
        });
        this.modalRef.changeDetectorRef.detectChanges();
      }, error => {
        console.log(error);
        this.alertService.alert(true, 5000, 'D', new Date()+" - "+error.message);
        return [];
    });
  }

  showModal() {
    //setTimeout(() => this.destroyModal(), 5000);
  }

  destroyModal() {
      if (this.modalRef) {
        this.modalRef.destroy();
        delete this.modalRef;
      }
  }
}
