import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { T24Module } from './modules/t24/t24.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';

import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { MenuService } from './services/menu.service';
import { DomService } from './services/dom.service';
import { ModalService } from './services/modal.service';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './services/alert.service';
import { ModalComponent } from './components/modal/modal.component';
import { SplitPipe } from './services/split.pipe';
import { IsdatePipe } from './services/isdate.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavbarComponent,
    LoginComponent,
    AlertComponent,
    ModalComponent,
    SplitPipe,
    IsdatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    T24Module,
    AppRoutingModule
  ],
  providers: [
    AuthGuardService,
    UserService,
    MenuService,
    AlertService, // to share service between component
    DomService,
    ModalService
  ],
  entryComponents : [
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
