import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { Routes, RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';

import { T24RoutingModule } from './t24-routing.module';
import { T24Component } from './t24.component';
import { CobMonitorComponent } from './cobmonitor/cobmonitor.component';

import { ChartDirective } from './cobmonitor/chart.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    HighchartsChartModule,
    T24RoutingModule
  ],
  declarations: [
    T24Component,
    CobMonitorComponent,
    ChartDirective
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class T24Module { }
