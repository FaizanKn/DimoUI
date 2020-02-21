import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MovieDetailService {

    public movieId: BehaviorSubject<string>= new BehaviorSubject('');

    private movieDBUrl: string = `https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=`;
    constructor(private http: HttpClient) {}

    
    public getMovieId(): Observable<string>{
        return this.movieId;
      }

    public getMovieThumbNailByAPI(movieName: string){
        return this.http.get(this.movieDBUrl + movieName);
    }



    public getMovieById(movieId: string){
       return this.http.get(`/api/movie?id=${movieId}`);
    
    }

}