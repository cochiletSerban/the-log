import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AdminPanelUser } from '../objects/adminPanelUser';

@Injectable()
export class AdminService {

  url = 'https://shielded-hollows-19820.herokuapp.com/';
  constructor(private http: HttpClient) { }

  getDoctors() {
    return this.http.get<AdminPanelUser[]>(this.url + 'get_users');
  }

  validateDoctor(username: string) {
    
    return this.http.post(this.url + 'validate_user', {username: username});
  }

  invalidateDoctor(username: string) {
    return this.http.post(this.url + 'invalidate_user', {username: username});
  }
}
