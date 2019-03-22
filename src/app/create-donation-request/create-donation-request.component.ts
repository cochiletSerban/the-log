import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeDirective, MaterializeAction } from 'angular2-materialize';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostDonationService } from '../services/post-donation.service';
import { DonationResponse } from '../objects/donationResponse';

@Component({
  selector: 'app-create-donation-request',
  templateUrl: './create-donation-request.component.html',
  styleUrls: ['./create-donation-request.component.scss']
})
export class CreateDonationRequestComponent implements OnInit {
  modalActions = new EventEmitter<string|MaterializeAction>();
  createDonationForm: FormGroup;
  selectedOption="";
  namePlaceholder = "Hospital Name";
  hospitalDisable = false;
  patientDisable = true;
  hospitalClicked = true;
  patientClicked = false;
  usedIcon = "local_hospital";

  status: string;
  constructor(private donationService:PostDonationService) {}

  ngOnInit() {
    this.createDonationForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'requestedQuantity': new FormControl(null, Validators.required),
      'bloodType': new FormControl(null, Validators.required)
    });
  }

  changePlaceholderHospital() {
    if (!this.hospitalClicked) {
      this.namePlaceholder = "Hospital Name";
      this.usedIcon = "local_hospital";
      this.patientDisable = true;
      this.hospitalClicked = true;
    } else if (this.hospitalClicked) {
      this.hospitalClicked = false;
      this.patientDisable = false;
    }
  }

  changePlaceholderPatient() {
    if (!this.patientClicked) {
      this.namePlaceholder = "Patient Name";
      this.usedIcon = "account_circle";
      this.hospitalDisable = true;
      this.patientClicked = true;
    } else if (this.patientClicked) {
      this.patientClicked = false;
      this.hospitalDisable = false;
    }
  }

  createRequest() {
    if(this.createDonationForm.valid) {

      let tk = localStorage.getItem('token');
      let donationRequest = {
        token: tk,
        name: this.createDonationForm.value.name,
        requested_quantity: parseFloat(this.createDonationForm.value.requestedQuantity),
        blood_type: this.createDonationForm.value.bloodType
      }
      console.log(donationRequest);
      this.donationService.postDonation(donationRequest).subscribe(
        (response) => {
          console.log("Resp");
          console.log(response.error);
          console.log(response.message);
          if(response.message === undefined)
            this.status = response.error;
          else
            this.status = response.message;
        },
        (err) => {
          console.log("Err");
          console.log(err);
          this.status = err;
        }
      );
    }
    else {
      this.status="Input not valid";
      console.log("Input not valid");
    }
  }
}
