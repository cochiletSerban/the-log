import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaibleDonationsComponent } from './avaible-donations.component';

describe('AvaibleDonationsComponent', () => {
  let component: AvaibleDonationsComponent;
  let fixture: ComponentFixture<AvaibleDonationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaibleDonationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaibleDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
