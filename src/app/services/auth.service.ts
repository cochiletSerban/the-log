import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { RegisterUser } from '../objects/registerUser';
import { LoginUser } from '../objects/loginUser';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {

  loginUrl = environment.apiUrl + '/users/auth/login';
  registerUrl = environment.apiUrl + '/users/auth/register';

  constructor(private http: HttpClient, private router: Router) {}

  isLogedIn() {
    if ( localStorage.getItem('token') != null ) {
      return true;
    } else {
       return false;
    }
  }

  getUserDetailes() {
    if (this.isLogedIn()) {
      return jwt_decode(localStorage.getItem('token'));
    }
  }


  register(user: RegisterUser) {
     return this.http.post(this.registerUrl, user);
  }

  private logUser(token) {
      localStorage.setItem('token', token);
      return token;
  }

  login(user: LoginUser) {
    
   return this.http.post(this.loginUrl, user)
      .map(token => this.logUser(token));
  }

  logout() {
    if (this.isLogedIn) {
      localStorage.clear();
      this.router.navigate(['/login']);
    }
  }

}
