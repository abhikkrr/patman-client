import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/Login';
import { SignUp } from '../model/SignUp';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  browserWindow = window || {};
  browserWindowEnv = this.browserWindow['__env'] || {};
  baseUrl: string = (this.browserWindowEnv.apiUrl.includes("http")) ? this.browserWindowEnv.apiUrl + '/api/auth':"";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  login(credentials: Login): Observable<any> {
    return this.http.post(this.baseUrl + '/signin', credentials, this.httpOptions);
  }

  register(signup: SignUp): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, {
      username: signup.username,
      email: signup.email,
      password: signup.password
    }, this.httpOptions);
  }
}
