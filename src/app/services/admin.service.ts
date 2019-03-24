import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AdminPanelUser } from '../objects/adminPanelUser';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AdminService {

  url = 'https://shielded-hollows-19820.herokuapp.com/';
  constructor(private http: HttpClient) { }
  users: AdminPanelUser[] =
  [
    {
      _id: '1245',
      username: 'user1',
      type: 3,
      is_valid: true
    },

    {
      _id: '1245',
      username: 'user2',
      type: 3,
      is_valid: false
    },
    {
      _id: '1245',
      username: 'user3',
      type: 3,
      is_valid: false
    },
    {
      _id: '1245',
      username: 'user4',
      type: 3,
      is_valid: true
    }
  ];


  getDoctors() {
    //return this.http.get<AdminPanelUser[]>(this.url + 'get_users');
    return of(this.users).delay(100);
  }

  validateDoctor(username: string) {
    return this.http.post(this.url + 'validate_user', {username: username});
  }

  invalidateDoctor(username: string) {
    return this.http.post(this.url + 'invalidate_user', {username: username});
  }
}
