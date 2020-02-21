import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { UserService } from 'src/app/login/services/user.service';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css']
})
export class MovieDashboardComponent implements OnInit {
  public movieList={};
  constructor(private dashboardService: DashboardService, private userService: UserService) { }

  ngOnInit(): void {
    const email = this.userService.getEmailAddress();
    this.dashboardService.getMovieList(email)
    .then((result) => {
      console.log(result)
      this.movieList = result;
    },function(error){
      console.log(error);

    });
  }

  public getObjectKeys(object :any) {
    return Object.keys(object);
  }

}
