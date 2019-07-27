import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyformComponent } from './emergencyform.component';

describe('EmergencyformComponent', () => {
  let component: EmergencyformComponent;
  let fixture: ComponentFixture<EmergencyformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
