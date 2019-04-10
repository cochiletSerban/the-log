import { Component, OnInit, EventEmitter } from '@angular/core';

import { GetUserDataService } from '../services/get-user-data.service';
import { AuthService } from '../services/auth.service';
import { InternatinonalizationService } from '../services/internatinonalization.service';
@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss']
})
export class DoctorProfileComponent implements OnInit {

  name = '';
  constructor(private getUserData: GetUserDataService, private auth: AuthService, public inter: InternatinonalizationService) {
  }

  ngOnInit() {
    this.name = this.auth.getUserDetailes().username;
  }

}
