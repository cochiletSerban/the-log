import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDonationRequestComponent } from './create-donation-request.component';

describe('CreateDonationRequestComponent', () => {
  let component: CreateDonationRequestComponent;
  let fixture: ComponentFixture<CreateDonationRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDonationRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDonationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
