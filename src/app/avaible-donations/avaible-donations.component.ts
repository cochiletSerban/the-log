import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { PostDonationService } from '../services/post-donation.service';
import { AvailableDonations } from '../objects/availableDonations';
import { GetUserDataService } from '../services/get-user-data.service';


@Component({
  selector: 'app-avaible-donations',
  templateUrl: './avaible-donations.component.html',
  styleUrls: ['./avaible-donations.component.scss']
})
export class AvaibleDonationsComponent implements OnInit {
  mainTitle = 'Avaible Donations';
  donations: AvailableDonations[];

  constructor(private donationService: PostDonationService, private getUserData: GetUserDataService) {
    if (localStorage.getItem('userType') == '3') {
      this.mainTitle = 'Donation requests from your hospital';
    } else {
      this.mainTitle = 'Available Donation requests';
    }
  }

  ngOnInit() {
    this.getUserData.getData().subscribe(() => {
      this.donationService.getDonations().subscribe(
        (donations: AvailableDonations[]) => {
          this.donations = donations;
          console.log(donations);
        },
        (error) => console.log(error)
      );
    });
  }
}
