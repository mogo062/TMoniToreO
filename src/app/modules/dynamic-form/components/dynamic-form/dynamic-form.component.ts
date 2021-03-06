import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { FieldConfig } from '../../models/field-config';
import { Field } from '../../models/field';

@Component({
  exportAs: 'dynamicForm',
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnChanges, OnInit {

  @Input()
  config : FieldConfig[] = [];
  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  form : FormGroup;
  private datePipe = new DatePipe("en-US");

  get controls() { return this.config.filter(({type}) => type !== 'button'); }
  get changes() { return this.form.valueChanges; }
  get valid() { return this.form.valid; }
  get value() { return this.form.value; }


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createGroup();
  }

  ngOnChanges() {
    if (this.form) {
      const controls = Object.keys(this.form.controls);
      const configControls = this.controls.map((item) => item.name);

      controls
        .filter((control) => !configControls.includes(control))
        .forEach((control) => this.form.removeControl(control));

      configControls
        .filter((control) => !controls.includes(control))
        .forEach((name) => {
          const config = this.config.find((control) => control.name === name);
          this.form.addControl(name, this.createControl(config));
        });

    }
  }

  createGroup() {
    const group = this.fb.group({});
    this.config.forEach(control =>{
        console.log(control.name);
        console.log(this.fb.control());
         group.addControl(control.name, this.fb.control());
    });
    console.log("group : ", group);
    return group;
  }


  createControl(config: FieldConfig) {
    const { disabled, validation, value } = config;
    return this.fb.control({ disabled, value }, validation);
  }

  handleSubmit(event: Event) {
  //  console.log(event);
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.value);
  }

  setDisabled(name: string, disable: boolean) {
    if (this.form.controls[name]) {
      const method = disable ? 'disable': 'enable';
      this.form.controls[name][method]();
      return;
    }

    this.config = this.config.map((item) => {
      if (item.name === name) {
        item.disabled = disable;
      }
      return item;
    });
  }

  setValue(name: string, value: any) {
    this.form.controls[name].setValue(value, {emitEvent: true});
  }
  setValueWithField(name: string, value: any, fieldConfig : FieldConfig) {
    if(fieldConfig && fieldConfig.type){
      if(fieldConfig.type === 'button'){ return;}
      ////console.log(field.name);
      if(fieldConfig.type === 'date'){
        value=this.datePipe.transform(new Date(value), 'dd/MM/yyyy');
        console.log(value);
      }
      this.form.controls[name].setValue(value, {emitEvent: true});

    }

  }
}
