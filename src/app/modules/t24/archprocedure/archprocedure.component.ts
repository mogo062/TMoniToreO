import { Component,ElementRef, OnInit, OnDestroy, Input, Output, EventEmitter,  ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { FieldConfig } from '../../dynamic-form/models/field-config';
import { DynamicFormComponent } from '../../dynamic-form/components/dynamic-form/dynamic-form.component';

import { AlertService } from  '../../../services/alert.service';
import { ArchService, procArch } from '../../../services/arch.service';





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
    this.config = [
        {
          type: "hidden",
          label: "id",
          name: "id",
          placeholder: "id"
        },
        {
          type: "input",
          label: "Name of Procedure",
          name: "procName",
          placeholder: "Enter procedure name",
          validation: [Validators.required]
        },
        {
          type: "input",
          label: "Label of Procedure",
          name: "procLabel",
          placeholder: "Enter procedure label"
        },
        {
          type: "select",
          label: "Retention of Procedure",
          name: "retention",
          options: ["0M", "1M", "2M", "3M", "4M", "5M", "6M", "7M", "8M", "9M", "10M", "11M", "12M"],
          placeholder: "Select an option"
        },
        {
          type: "number",
          label: "Periority of Procedure",
          name: "periority",
          placeholder: "Enter procedure periority"
        },
        {
          type: "input",
          label: "Session",
          name: "session",
          placeholder: "Enter dollar universe session name"
        },
        {
          type: "date",
          label: "Next Execution",
          name: "nextExec",
          placeholder: "YYYY-MM-DD HH:mm:ss"
        },
        {
          type: "checkbox",
          label: "validated",
          name: "validated",
          placeholder: "validated"
        },
        {
          type: "radio",
          label: "executed",
          name: "executed",
          placeholder: "executed"
        },
        {
          type: "button",
          label: "Submit",
          name: "submit"

        }
      ]

  }

  ngOnInit() {
    this.title = this.route.snapshot.data.title;
    this.keys = this.route.snapshot.data.keys;
    this.beans = this.route.snapshot.data.beans;
    /*this.archService.getT24ArchiveDynamicForm("archprocedure.form.ini").subscribe((success : FieldConfig)=> {
        this.config = success;
      }, error => {
        console.log(error);
        this.alertService.alert(true, 5000, 'D', new Date()+" - "+error.message);
        return [];
    });*/

  }
  ngAfterViewInit(){
    //console.log(this.form);
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

  //  this.form.setDisabled('submit', true);
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
  t;
  submit(value: procArch) {
    console.log(value);
    return;
    value.validated=false;
    value.executed=false;
    value.nextExec=new Date(value.nextExec);
    value.archDate=value.nextExec;
    this.archService.saveT24ArchiveProcedure(value).subscribe(success => {
                console.log("POST Request is successful ", success);
                this.alertService.alert(true, 5000, 'S', "Successfully saving new Arch Procedure.");
                this.archService.getT24ArchiveProcedure().subscribe(success => {
                  this.beans= success;
                },
                error => {
                    this.alertService.alert(true, 5000, 'D', new Date()+" - "+error.message);
                    return [];
                });
            },
            error => {
                this.alertService.alert(true, 5000, 'D', new Date()+" - "+error.message);
                console.log("Error", error);
            }
        );
      console.log(this.t);
      //console.log(value);
  }

  onDelete(value : procArch){
    if(value && value.id){
      this.archService.deleteT24ArchiveProcedure(value.id).subscribe(success => {
                  console.log("POST Request is successful ", success);
                  this.alertService.alert(true, 5000, 'S', "Successfully deleted Arch Procedure with id="+value.id+".");
                  this.archService.getT24ArchiveProcedure().subscribe(success => {
                      this.beans= success;
                    },
                    error => {
                        this.alertService.alert(true, 5000, 'D', new Date()+" - "+error.message);
                        return [];
                  });
              },
              error => {
                  this.alertService.alert(true, 5000, 'D', new Date()+" - "+error.message);
                  console.log("Error", error);
              }
          );
    }
  }

  onEdit(value : procArch){
    console.log(this.form);
    //this.form.setValue("procName", "AAA");
    if(value){
      this.config.forEach(field => {
        console.log(field.name+"-->"+value[field.name]);
        //this.form.value[key]=value[key];
        this.form.setValueWithField(field.name, value[field.name], field);
      })
    }
  }

}
