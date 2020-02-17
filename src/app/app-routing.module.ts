import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/components/login/login.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap"


const routes: Routes = [{
  path: "",
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule, NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
