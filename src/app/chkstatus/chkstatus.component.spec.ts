import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChkstatusComponent } from './chkstatus.component';

describe('ChkstatusComponent', () => {
  let component: ChkstatusComponent;
  let fixture: ComponentFixture<ChkstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChkstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChkstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
