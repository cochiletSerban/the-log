import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaibleDonationsForUserComponent } from './avaible-donations-for-user.component';

describe('AvaibleDonationsForUserComponent', () => {
  let component: AvaibleDonationsForUserComponent;
  let fixture: ComponentFixture<AvaibleDonationsForUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaibleDonationsForUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaibleDonationsForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
