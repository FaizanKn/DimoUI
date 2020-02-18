
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class UserService {

    private url: string = 'https://dimoapi.herokuapp.com/api/';
    constructor(private http: HttpClient) { }

    public doLogin(body: any): Observable<any> {
        return this.http.post('/api/login', body);
    }

    public doRegister(body: any): Observable<any> {
        return this.http.post( '/api/signUp', body);
    }
}
