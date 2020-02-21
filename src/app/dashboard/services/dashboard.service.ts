import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getMovieList(email:string){
    return this.http.get('/api/dashboard/movies',{params: {
      email
    }}).toPromise();
  }
}
