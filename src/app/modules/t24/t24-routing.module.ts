import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../../services/auth-guard.service';
import { T24Component } from './t24.component';
import { CobMonitorComponent } from './cobmonitor/cobmonitor.component';
import { T24archiveComponent } from './t24archive/t24archive.component';
import { ArchprocedureComponent } from './archprocedure/archprocedure.component';
import { ArchdocumentComponent } from './archdocument/archdocument.component';
import { ArchuprocComponent } from './archuproc/archuproc.component';
import { ArchtablesComponent } from './archtables/archtables.component';
import { ArchtablesstatComponent } from './archtablesstat/archtablesstat.component';

import { CobResolver } from '../../services/cob.resolver';
import { TitleResolverService } from '../../services/title.resolver';
import { KeysResolverService } from '../../services/keys.resolver';
import { BeansResolverService } from '../../services/beans.resolver';

const t24Routes: Routes = [
  { path:'t24', component: T24Component, canActivate : [AuthGuardService] },
  {
    path:'t24/cobmonitor', component: CobMonitorComponent, canActivate : [AuthGuardService], resolve : {
      message : CobResolver
    }
  },
  {
    path:'t24/archiving', component: T24archiveComponent, canActivate : [AuthGuardService],
    children : [
      {
          path:'proc', component : ArchprocedureComponent, resolve : {
            title : TitleResolverService,
            keys : KeysResolverService,
            beans : BeansResolverService
          }
      },
      {
          path:'docs', component : ArchdocumentComponent
      },
      {
          path:'uproc', component : ArchuprocComponent
      },
      {
          path:'tables', component : ArchtablesComponent
      },
      {
          path:'stat', component : ArchtablesstatComponent
      }
    ]
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(t24Routes)],
  exports: [RouterModule],
  providers : [
    CobResolver,
    TitleResolverService,
    KeysResolverService,
    BeansResolverService
  ]
})
export class T24RoutingModule { }
