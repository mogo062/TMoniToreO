import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../../services/auth-guard.service';

import { T24Component } from './t24.component';
import { CobMonitorComponent } from './cobmonitor/cobmonitor.component';

const t24Routes: Routes = [
  { path:'t24', component: T24Component, canActivate : [AuthGuardService] },
  { path:'t24/cobmonitor', component: CobMonitorComponent, canActivate : [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(t24Routes)],
  exports: [RouterModule]
})
export class T24RoutingModule { }