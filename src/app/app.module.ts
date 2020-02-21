import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, CanActivateViaAuthGuard } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlertModule } from "./shared/alert/alert.module";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule,
    HttpClientModule
  ],
  providers: [ CanActivateViaAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

