import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field';
import { FieldConfig } from '../../models/field-config';

@Component({
  selector: 'form-radio',
  templateUrl: './form-radio.component.html',
  styleUrls: ['./form-radio.component.css']
})
export class FormRadioComponent implements Field {
  config : FieldConfig;
  group: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
