import { Component, OnInit, AfterViewInit, Renderer2, ElementRef, ViewChild, EventEmitter, Input } from '@angular/core';
import { MaterializeDirective, MaterializeAction } from 'angular2-materialize';
import { Renderer3 } from '@angular/core/src/render3/renderer';
import { AvailableDonations } from '../objects/availableDonations';
import { Router } from '@angular/router';
import { PostDonationService } from '../services/post-donation.service';


@Component({
  selector: 'app-cause',
  templateUrl: './cause.component.html',
  styleUrls: ['./cause.component.scss']
})
export class CauseComponent implements OnInit, AfterViewInit {
  globalActions = new EventEmitter<string|MaterializeAction>();
  modalActions = new EventEmitter<string|MaterializeAction>();
  procent = 0;
  @ViewChild('blood') blood: ElementRef;
  @Input() donations: AvailableDonations;
  params =  ['thank you for you donation' , 3000];

  constructor(private renderer: Renderer2, private el: ElementRef, private router: Router, private postDonation: PostDonationService) { }

  ngOnInit() {
    this.params =  [this.donations.name + ' thank you for you donation' , 3000];
    this.procent = this.donations.existing_quantity / this.donations.requested_quantity;
  }


  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

  triggerToast() {
    this.globalActions.emit('toast');
    localStorage.setItem('donated', 'true');
    const donation = {
      donation_id: this.donations.id,
      quantity: 0.4
    };
    console.log(donation);
    
    this.postDonation.makeADonation(donation).subscribe((resp) => console.log(resp));
    this.router.navigate(['/user-profile']);
  }

  ngAfterViewInit() {
    // let timeleft = 0;

    // const downloadTimer = setInterval(() => {
    //   this.procent += timeleft;
    //   this.procent = this.procent / 10;
    //   timeleft++;
    //   if (timeleft > 10) {
    //     timeleft = 0;
    //     this.procent = 0;
    //   }
    // }, 1000);
    
  }

  checkDonor() {
    if (localStorage.getItem('userType') === '4') {
      return true;
    }
    return false;
  }

}
