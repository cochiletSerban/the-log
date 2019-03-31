import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AdminPanelUser } from '../objects/adminPanelUser';
import { of } from 'rxjs/observable/of';
import { environment } from '../../environments/environment';
import { User } from '../objects/user';

@Injectable()
export class AdminService {

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  users: AdminPanelUser[] = [];
  


  getDoctors() {
    //return this.http.get<AdminPanelUser[]>(this.url + 'get_users');
    return this.http.get<AdminPanelUser[]>(this.apiUrl + '/users');
  }

  validateDoctor(user: User) {
    return this.http.patch(this.apiUrl + '/users/' + user._id , {active: true});
  }

  invalidateDoctor(user: User) {
    return this.http.patch(this.apiUrl + '/users/' + user._id , {active: false});
  }
}
