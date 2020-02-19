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
          (error)=>{  
            if(error.status == 400 || error.status == 401){
              this.alertService.error("Invalid Username or Password");
            }   
            else{
              this.alertService.error("Error Occurred");
            }     
              
          });
  }

  register(){
    this.router.navigateByUrl('/register');
  }

}
