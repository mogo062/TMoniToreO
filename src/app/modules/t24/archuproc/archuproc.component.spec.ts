import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchuprocComponent } from './archuproc.component';

describe('ArchuprocComponent', () => {
  let component: ArchuprocComponent;
  let fixture: ComponentFixture<ArchuprocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchuprocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchuprocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
