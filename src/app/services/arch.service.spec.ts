import { TestBed } from '@angular/core/testing';

import { ArchService } from './arch.service';

describe('ArchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArchService = TestBed.get(ArchService);
    expect(service).toBeTruthy();
  });
});
