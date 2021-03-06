import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { DynamicFieldDirective } from './components/dynamic-field.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormDateComponent } from './components/form-date/form-date.component';
import { FormNumberComponent } from './components/form-number/form-number.component';
import { FormHiddenComponent } from './components/form-hidden/form-hidden.component';
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component';
import { FormRadioComponent } from './components/form-radio/form-radio.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClarityModule
  ],
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent,
    FormDateComponent,
    FormNumberComponent,
    FormHiddenComponent,
    FormCheckboxComponent,
    FormRadioComponent
  ],
  exports: [DynamicFormComponent],
  entryComponents: [
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent,
    FormDateComponent,
    FormNumberComponent,
    FormHiddenComponent,
    FormCheckboxComponent,
    FormRadioComponent
  ]
})
export class DynamicFormModule { }
