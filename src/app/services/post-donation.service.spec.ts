import { TestBed, inject } from '@angular/core/testing';

import { PostDonationService } from './post-donation.service';

describe('PostDonationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostDonationService]
    });
  });

  it('should be created', inject([PostDonationService], (service: PostDonationService) => {
    expect(service).toBeTruthy();
  }));
});
