
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class UserService {

    private url: string = 'https://dimoapi.herokuapp.com/api/';

    private userEmail: string;

    constructor(private http: HttpClient) { }

    public loginSuccess(email: string){
        this.userEmail = email;
        (<any>window).document.cookie = "dimo-user="+(<any>window).btoa(email)+"; Path=/;";
    }

    public logout(){
        this.userEmail = null;
        (<any>window).document.cookie = "dimo-user=; Path=/;Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }

    public getEmailCookie() {
        var value = "; " + document.cookie;
        var parts = value.split("dimo-user=");
        if (parts.length == 2) return (<any>window).btoa(parts.pop().split(";").shift());
        else return null;
    }

    public checkLoginStatus(){
        let cookieUserData = this.getEmailCookie();
        if(cookieUserData){
            this.userEmail = cookieUserData;
        }
    }

    public isLoggedIn(){
        if(!this.userEmail){
            this.checkLoginStatus();
        }

        return this.userEmail ? true : false;
    }

    public doLogin(body: any): Observable<any> {
        return this.http.post('/api/login', body);
    }

    public doRegister(body: any): Observable<any> {
        return this.http.post( '/api/signUp', body);
    }

    public getPrefferedList(){
        return this.http.get('/api/movie-types');
    }
}
