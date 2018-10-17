import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchdocumentComponent } from './archdocument.component';

describe('ArchdocumentComponent', () => {
  let component: ArchdocumentComponent;
  let fixture: ComponentFixture<ArchdocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchdocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchdocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
