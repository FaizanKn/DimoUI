import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, BehaviorSubject, Observable } from 'rxjs';

@Injectable()
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
       return of({
        "homepage": "http://marvel.com/movies/movie/193/avengers_age_of_ultron",
        "overview": "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
        "tagline": "A New Age Has Come.",
        "movieId": 99861,
        "originalTitle": "Avengers: Age of Ultron",
        "releaseDate": "2015-04-22",
        "originalLanguage": "en",
        "genres": [
            {
                "id": 28,
                "name": "Action"
            },
            {
                "id": 12,
                "name": "Adventure"
            },
            {
                "id": 878,
                "name": "Science Fiction"
            }
        ],
        "production_companies": [
            {
                "name": "Marvel Studios",
                "id": 420
            },
            {
                "name": "Prime Focus",
                "id": 15357
            },
            {
                "name": "Revolution Sun Studios",
                "id": 76043
            }
        ]
    });
    }

}