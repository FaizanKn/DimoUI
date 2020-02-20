import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "./../../login/services/user.service";
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  userName:string;
  constructor(private router: Router, private userService: UserService) { 
    this.userName = localStorage.getItem("userName");
  }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
    this.router.navigateByUrl("");
}
}
