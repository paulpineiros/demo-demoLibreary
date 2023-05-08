import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { ButtonAlertModule } from 'projects/button-alert/src/public-api';
import {ButtonAlertModule} from '@mycne/button-alert'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
