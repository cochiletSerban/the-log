import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeDirective, MaterializeAction } from 'angular2-materialize';
import { GetUserDataService } from '../services/get-user-data.service';
@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss']
})
export class DoctorProfileComponent implements OnInit {
  modalActions = new EventEmitter<string|MaterializeAction>();
  name = localStorage.getItem('username');
  constructor(private getUserData: GetUserDataService) {
  }

  ngOnInit() {
    this.name = localStorage.getItem('username');
  }

}
