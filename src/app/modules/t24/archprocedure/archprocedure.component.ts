import { Component,ElementRef, OnInit, OnDestroy, Input, Output, EventEmitter,  ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { FieldConfig } from '../../dynamic-form/models/field-config';
import { DynamicFormComponent } from '../../dynamic-form/components/dynamic-form/dynamic-form.component';

import { AlertService } from  '../../../services/alert.service';
import { ArchService } from '../../../services/arch.service';

@Component({
  selector: 'archprocedure',
  templateUrl: './archprocedure.component.html',
  styleUrls: ['./archprocedure.component.css']
})
export class ArchprocedureComponent implements OnInit, AfterViewInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  @Input()
  title : string="";
  @Input()
  beans : any = [];
  @Output()
  onClose : EventEmitter<null> = new EventEmitter<null>();
  @Input()
  keys : any;
  config: FieldConfig[] = [];
  constructor(private alertService: AlertService, private archService : ArchService,private route : ActivatedRoute) {

  }

  ngOnInit() {
    this.title = this.route.snapshot.data.title;
    this.keys = this.route.snapshot.data.keys;
    this.beans = this.route.snapshot.data.beans;
    this.archService.getT24ArchiveDynamicForm("archprocedure.form.ini").subscribe(success => {
        console.log(this.config);
        console.log(success);
        this.config = success;

      }, error => {
        console.log(error);
        this.alertService.alert(true, 5000, 'D', new Date()+" - "+error.message);
        return [];
    });

  }
  ngAfterViewInit(){
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
  //  this.form.setValue('name', 'Todd Motto');
    /*
    this.archService.getT24ArchiveDynamicForm("archprocedure.form.ini").subscribe(success => {
        console.log(this.config);
        console.log(success);
        this.config = success;

      }, error => {
        console.log(error);
        this.alertService.alert(true, 5000, 'D', new Date()+" - "+error.message);
        return [];
    });*/
  }
  submit(value: {[name: string]: any}) {
        console.log(value);
  }

}
