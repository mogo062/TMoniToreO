
import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormButtonComponent } from './form-button/form-button.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormDateComponent } from './form-date/form-date.component';
import { FormNumberComponent } from './form-number/form-number.component';
import { FormHiddenComponent } from './form-hidden/form-hidden.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormRadioComponent } from './form-radio/form-radio.component';


import { Field } from '../models/field';
import { FieldConfig } from '../models/field-config';

const components :{[type: string]: Type<Field>}= {
  button: FormButtonComponent,
  input: FormInputComponent,
  hidden: FormHiddenComponent,
  number: FormNumberComponent,
  date : FormDateComponent,
  select: FormSelectComponent,
  radio: FormRadioComponent,
  checkbox : FormCheckboxComponent
};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit{
  @Input() config;
  @Input() group: FormGroup;

  component: ComponentRef<Field>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit() {
    if (!components[this.config.type]) {
       const supportedTypes = Object.keys(components).join(',');
       throw new Error(
         `Trying to use an unsupported type (${this.config.type}).
         Supported types: ${supportedTypes}`
       );
     }
     const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
     this.component = this.container.createComponent(component);
     this.component.instance.config = this.config;
     this.component.instance.group = this.group;
  }

  ngOnChanges() {
     if (this.component) {
       this.component.instance.config = this.config;
       this.component.instance.group = this.group;
     }
   }

}
