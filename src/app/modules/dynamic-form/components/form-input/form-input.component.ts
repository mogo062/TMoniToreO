import { Component, OnInit, ViewContainerRef  } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements Field {
  config;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
