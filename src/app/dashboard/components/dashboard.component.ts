import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from "./../../login/services/user.service";

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
    constructor(private router: Router, private userService: UserService){

    }

    logout(){
        this.userService.logout();
        this.router.navigateByUrl("");
    }
}
