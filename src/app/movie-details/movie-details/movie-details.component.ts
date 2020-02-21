import { Component, OnInit } from '@angular/core';
import { MovieDetailService } from './movie-detail.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { WallpaperService } from 'src/app/login/services/wallpaper.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public thumbNail = `https://image.tmdb.org/t/p/w400`;
  public showLoader: boolean;
  public movie: any;
  constructor(private movieDetailService: MovieDetailService,public wallpaperService: WallpaperService, private router: Router) { }

  ngOnInit(): void {
    this.movieDetailService.getMovieId().subscribe((id) => {
      if(id){
        localStorage.setItem('movieId',id);
      this.getMovieById(id);
      } else {
        this.router.navigate(['/dashboard']);
      }
      
    });
  }

  public getMovieThumbNailsByMovie(movieName: string) {
    this.movieDetailService.getMovieThumbNailByAPI(movieName).subscribe((resp: any) => {
      const movieResultsByName = resp.results as Array<any>;
      if (movieResultsByName && movieResultsByName.length > 0) {
        const movie = movieResultsByName.filter((mov) => {
          return mov.original_title === movieName;
        });
        this.thumbNail += movie[0].poster_path;
      }
    });
  }

  public getMovieById(movieId: string) {
    this.showLoader = true;
    this.movieDetailService.getMovieById(movieId).subscribe((response) => {
      this.showLoader = false;
      this.movie = response;
      // console.log(this.movie);
      // if (this.movie) {
      //   this.getMovieThumbNailsByMovie(this.movie.originalTitle);
      // }
    },
    err => {
      this.showLoader = false;
    });
  }


}
