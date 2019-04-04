import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTriggerComponent } from './chat-trigger.component';

describe('ChatTriggerComponent', () => {
  let component: ChatTriggerComponent;
  let fixture: ComponentFixture<ChatTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatTriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
