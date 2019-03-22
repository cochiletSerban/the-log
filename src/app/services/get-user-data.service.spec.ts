import { TestBed, inject } from '@angular/core/testing';

import { GetUserDataService } from './get-user-data.service';

describe('GetUserDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetUserDataService]
    });
  });

  it('should be created', inject([GetUserDataService], (service: GetUserDataService) => {
    expect(service).toBeTruthy();
  }));
});
