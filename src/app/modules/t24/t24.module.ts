import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { Routes, RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';


import { T24RoutingModule } from './t24-routing.module';


import { T24Component } from './t24.component';
import { CobMonitorComponent } from './cobmonitor/cobmonitor.component';

import { ChartDirective } from './cobmonitor/chart.directive';
import { CobtableComponent } from './cobtable/cobtable.component';
import { T24archiveComponent } from './t24archive/t24archive.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    HighchartsChartModule,
    T24RoutingModule
  ],
  declarations: [
    T24Component,
    CobMonitorComponent,
    ChartDirective,
    CobtableComponent,
    T24archiveComponent

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class T24Module { }
