import { Component, OnInit, ViewContainerRef  } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field';
import { FieldConfig } from '../../models/field-config';

@Component({
  selector: 'form-hidden',
  templateUrl: './form-hidden.component.html',
  styleUrls: ['./form-hidden.component.css']
})
export class FormHiddenComponent implements Field {
  config : FieldConfig;
  group: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
