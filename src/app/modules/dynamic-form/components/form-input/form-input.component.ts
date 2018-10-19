import { Component, OnInit, ViewContainerRef  } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field';
import { FieldConfig } from '../../models/field-config';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements Field{
  config : FieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
