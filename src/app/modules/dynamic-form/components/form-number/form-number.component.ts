import { Component, OnInit, ViewContainerRef  } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field';
import { FieldConfig } from '../../models/field-config';

@Component({
  selector: 'form-number',
  templateUrl: './form-number.component.html',
  styleUrls: ['./form-number.component.css']
})
export class FormNumberComponent implements Field {
  config : FieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
