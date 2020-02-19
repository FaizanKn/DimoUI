import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, CanActivateViaAuthGuard } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlertModule } from "./shared/alert/alert.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule
  ],
  providers: [ CanActivateViaAuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }

