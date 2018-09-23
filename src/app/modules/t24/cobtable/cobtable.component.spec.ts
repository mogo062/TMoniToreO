import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobtableComponent } from './cobtable.component';

describe('CobtableComponent', () => {
  let component: CobtableComponent;
  let fixture: ComponentFixture<CobtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
