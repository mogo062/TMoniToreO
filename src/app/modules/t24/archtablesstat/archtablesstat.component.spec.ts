import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchtablesstatComponent } from './archtablesstat.component';

describe('ArchtablesstatComponent', () => {
  let component: ArchtablesstatComponent;
  let fixture: ComponentFixture<ArchtablesstatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchtablesstatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchtablesstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
