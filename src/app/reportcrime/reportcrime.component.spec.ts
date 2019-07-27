import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportcrimeComponent } from './reportcrime.component';

describe('ReportcrimeComponent', () => {
  let component: ReportcrimeComponent;
  let fixture: ComponentFixture<ReportcrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportcrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportcrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
