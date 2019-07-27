import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimedatabaseComponent } from './crimedatabase.component';

describe('CrimedatabaseComponent', () => {
  let component: CrimedatabaseComponent;
  let fixture: ComponentFixture<CrimedatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimedatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimedatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
