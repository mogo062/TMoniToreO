import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field';
import { FieldConfig } from '../../models/field-config';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent implements Field{
  config : FieldConfig;
  group : FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
