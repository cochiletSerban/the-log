import { TestBed, inject } from '@angular/core/testing';

import { InternatinonalizationService } from './internatinonalization.service';

describe('InternatinonalizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InternatinonalizationService]
    });
  });

  it('should be created', inject([InternatinonalizationService], (service: InternatinonalizationService) => {
    expect(service).toBeTruthy();
  }));
});
