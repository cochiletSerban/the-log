import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import * as M from 'materialize-css/dist/js/materialize';
import { InternatinonalizationService } from '../services/internatinonalization.service';
@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  doctors = [];
  doctorsForm: FormGroup;

  constructor(private adminService: AdminService, public auth: AuthService,public inter: InternatinonalizationService) { }

  ngOnInit() {
    const doctorsFormArray = new FormArray([]);
    this.adminService.getDoctors().subscribe(resp => {
      resp.forEach(element => {
        if (element.role === 'manager') {
          this.doctors.push(element);
          doctorsFormArray.push(new FormControl(element.active));
        }
      });
    });

    this.doctorsForm = new FormGroup({'doctors': doctorsFormArray}, this.doctorsFormValidator.bind(this));
  }

  doctorsFormValidator(c: FormGroup) {

  }

  onSubmit() {
    for (let _i = 0; _i < this.doctors.length; _i++) {
      if (this.doctorsForm.value.doctors[_i]) {
        this.adminService.validateDoctor(this.doctors[_i]).subscribe(
          resp => {
            M.toast({html: this.doctors[_i].username + ' ' + this.inter.labels.adminProfile.toasterActive});

          },
          err => {
            console.log(err);
          }
        );
      } else if (!this.doctorsForm.value.doctors[_i]) {
        this.adminService.invalidateDoctor(this.doctors[_i]).subscribe(
          resp => {
            M.toast({html: this.doctors[_i].username + ' ' + this.inter.labels.adminProfile.toasterDeactive });
          },
          err => {
            console.log(err);
          }
        );
      }
    }

    // Array of values, without doctors name
    }
}
