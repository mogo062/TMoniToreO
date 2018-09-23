import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T24archiveComponent } from './t24archive.component';

describe('T24archiveComponent', () => {
  let component: T24archiveComponent;
  let fixture: ComponentFixture<T24archiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T24archiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T24archiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
