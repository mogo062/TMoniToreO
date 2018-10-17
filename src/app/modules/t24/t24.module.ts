import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { Routes, RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { T24RoutingModule } from './t24-routing.module';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';

import { T24Component } from './t24.component';
import { CobMonitorComponent } from './cobmonitor/cobmonitor.component';
import { ChartDirective } from './cobmonitor/chart.directive';
import { CobtableComponent } from './cobtable/cobtable.component';
import { T24archiveComponent } from './t24archive/t24archive.component';
import { ArchprocedureComponent } from './archprocedure/archprocedure.component';
import { ArchdocumentComponent } from './archdocument/archdocument.component';
import { ArchuprocComponent } from './archuproc/archuproc.component';

import { SplitPipe } from '../../services/split.pipe';
import { IsdatePipe } from '../../services/isdate.pipe';

//import { AlertComponent } from '../../components/alert/alert.component';
//import { AlertService } from '../../services/alert.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    HighchartsChartModule,
    DynamicFormModule,
    T24RoutingModule
  ],
  declarations: [
    T24Component,
    CobMonitorComponent,
    ChartDirective,
    CobtableComponent,
    T24archiveComponent,
    ArchprocedureComponent,
    SplitPipe,
    IsdatePipe,
    ArchdocumentComponent,
    ArchuprocComponent
    //AlertComponent

  ],
  providers:[
  //  AlertService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class T24Module { }
