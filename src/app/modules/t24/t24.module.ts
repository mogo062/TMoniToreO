import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { Routes, RouterModule } from '@angular/router';

import { T24RoutingModule } from './t24-routing.module';
import { T24Component } from './t24.component';
import { CobMonitorComponent } from './cobmonitor/cobmonitor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    T24RoutingModule
  ],
  declarations: [T24Component, CobMonitorComponent]
})
export class T24Module { }
