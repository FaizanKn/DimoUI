
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private url: string = 'https://dimoapi.herokuapp.com/api/';
    constructor(private http: HttpClient) { }

    public doLogin(body: any): Observable<any> {
        return this.http.post(this.url + 'login', body);
    }

    public doRegister(body: any): Observable<any> {
        return this.http.post(this.url + 'signUp', body);
    }
}
