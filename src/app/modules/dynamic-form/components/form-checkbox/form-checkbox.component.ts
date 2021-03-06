import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field';
import { FieldConfig } from '../../models/field-config';

@Component({
  selector: 'form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.css']
})
export class FormCheckboxComponent implements Field {
  config : FieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
