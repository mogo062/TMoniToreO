import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobMonitorComponent } from './cobmonitor.component';

describe('CobMonitorComponent', () => {
  let component: CobMonitorComponent;
  let fixture: ComponentFixture<CobmonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
