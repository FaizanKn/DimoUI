import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { UserService } from 'src/app/login/services/user.service';
import { MovieDetailService } from 'src/app/movie-details/movie-details/movie-detail.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css']
})
export class MovieDashboardComponent implements OnInit {
  public movieList={};
  constructor(private router: Router,private dashboardService: DashboardService, private userService: UserService, private movieDetailService: MovieDetailService) { }

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

  redirectToMovieList(movie: any){
      console.log(movie.movieId);
      this.movieDetailService.setMovieId(movie.movieId);
      this.router.navigateByUrl("/movie-details");
  }

  public getObjectKeys(object :any) {
    return Object.keys(object);
  }

}
