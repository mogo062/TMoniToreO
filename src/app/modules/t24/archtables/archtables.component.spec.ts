import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchtablesComponent } from './archtables.component';

describe('ArchtablesComponent', () => {
  let component: ArchtablesComponent;
  let fixture: ComponentFixture<ArchtablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchtablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchtablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
