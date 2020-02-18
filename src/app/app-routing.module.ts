import { NgModule , Injectable} from '@angular/core';
import { Routes, Router, RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/components/login/login.component';
import { DashboardComponent } from './dashboard/components/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserService } from './login/services/user.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private authService: UserService, private router: Router) {}

  checkLogin(url: string): boolean {
    
    if(this.authService.isLoggedIn()){
        if(url!= "/"){
          return true;
        }
        else{
            this.router.navigateByUrl("/dashboard");
            return false;
        }
    }
    else{
      if(url== "/"){
        return true;
      }
      else{
          this.router.navigateByUrl("");
          return false;
      }
    }
}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: string = state.url;
    return this.checkLogin(url);
    
  }
}

const routes: Routes = [{
  path: "",
  component: LoginComponent,
  canActivate: [ CanActivateViaAuthGuard ]
},
{
  path:"dashboard",
  component: DashboardComponent,
  canActivate: [ CanActivateViaAuthGuard ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}), LoginModule, DashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
