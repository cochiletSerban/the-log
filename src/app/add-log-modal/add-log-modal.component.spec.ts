import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLogModalComponent } from './add-log-modal.component';

describe('AddLogModalComponent', () => {
  let component: AddLogModalComponent;
  let fixture: ComponentFixture<AddLogModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLogModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
