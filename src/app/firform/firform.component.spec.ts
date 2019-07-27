import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FIRFormComponent } from './firform.component';

describe('FIRFormComponent', () => {
  let component: FIRFormComponent;
  let fixture: ComponentFixture<FIRFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FIRFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FIRFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
