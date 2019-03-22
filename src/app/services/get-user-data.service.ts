import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AvailableDonations } from '../objects/availableDonations';


@Injectable()
export class GetUserDataService {
  url = 'https://shielded-hollows-19820.herokuapp.com';
  constructor(private http: HttpClient) { }

  private setUserDataInLocal(data) {
    console.log(data);
    
    if (localStorage.getItem('userType') === '3') {
      localStorage.setItem('hospital', data.hospital);
    } else {
      localStorage.setItem('blood_type', data.blood_type);
    }
  }

  getData() {
    return this.http.get(this.url + '/get_user_data').map(resp => this.setUserDataInLocal(resp));
  }
}
