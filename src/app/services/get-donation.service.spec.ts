import { TestBed, inject } from '@angular/core/testing';

import { GetDonationService } from './get-donation.service';

describe('GetDonationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDonationService]
    });
  });

  it('should be created', inject([GetDonationService], (service: GetDonationService) => {
    expect(service).toBeTruthy();
  }));
});
// to be deleted