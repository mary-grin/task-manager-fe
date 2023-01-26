import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser, IUserAuth} from "../interfaces/iuser";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost:5000/api/auth'

  constructor(private http: HttpClient) { }

  signUp(user: IUserAuth): Observable<IUser> {
    const {email, password} = user;
    return this.http.post<IUser>(`${this.url}/register`, {email, password}, {withCredentials: true});
  }

  signIn(user: IUserAuth): Observable<IUser> {
    const {email, password} = user;
    return this.http.post<IUser>(`${this.url}/login`, {email, password}, {withCredentials: true});
  }

  getUserInfo(): Observable<IUser> {
    return this.http.get<IUser>(this.url, {withCredentials: true});
  }

  signOut(): Observable<string> {
    return this.http.post<string>(`${this.url}/logout`, {}, {withCredentials: true});
  }
}
