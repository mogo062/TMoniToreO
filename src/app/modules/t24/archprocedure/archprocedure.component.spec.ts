import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchprocedureComponent } from './archprocedure.component';

describe('ArchprocedureComponent', () => {
  let component: ArchprocedureComponent;
  let fixture: ComponentFixture<ArchprocedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchprocedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchprocedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
