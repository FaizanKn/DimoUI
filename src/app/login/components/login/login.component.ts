import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './../../services/user.service';
import { AlertService } from "./../../../shared/alert/alert.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(private router: Router, private http: HttpClient, private userService: UserService, private alertService: AlertService) { }

  ngOnInit(): void {
  }

      login(){
        this.http.post("/api/login",{email: this.email, password:this.password})
          .subscribe((result)=>{
            this.userService.loginSuccess(this.email);
            this.router.navigateByUrl('/dashboard');
          },
          ({error})=>{
              this.alertService.error(error.message);
          });
  }

  register(){
    this.router.navigateByUrl('/register');
  }

}
