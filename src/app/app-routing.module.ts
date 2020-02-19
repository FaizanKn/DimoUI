import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/components/login/login.component';
import { NavigationComponent } from "./dashboard/components/navigation/navigation.component"


const routes: Routes = [{
  path: "",
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), LoginModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
