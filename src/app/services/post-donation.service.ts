import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { DonationResponse } from '../objects/donationResponse';
import { AvailableDonations } from '../objects/availableDonations';

@Injectable()
export class PostDonationService {
    constructor(private http: HttpClient) {}

    postDonation(donationRequest) {
        return this.http.post<DonationResponse>
        ('https://shielded-hollows-19820.herokuapp.com/add_donation', donationRequest);
    }

    getDonations() {
        // Donator
        if(localStorage.getItem('userType') == '4') {
            return this.http.get<AvailableDonations[]>
            ('https://shielded-hollows-19820.herokuapp.com/available_donations/blood_type/' + localStorage.getItem('blood_type'));
        }
        // Doctor
        else if(localStorage.getItem('userType') == '3') {
            console.log(localStorage.getItem('hospital'));
            return this.http.post<AvailableDonations[]>
            ('https://shielded-hollows-19820.herokuapp.com/available_donations/hospital',
            {hospital: localStorage.getItem('hospital')});
        }
    }

    makeADonation(donation) {

        return this.http.post('https://shielded-hollows-19820.herokuapp.com/donate', donation);
    }
}
