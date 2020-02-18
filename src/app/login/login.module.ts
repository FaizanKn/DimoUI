import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [RegisterUserComponent, LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule

  ]
})
export class LoginModule { }
