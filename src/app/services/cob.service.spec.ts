import { TestBed } from '@angular/core/testing';

import { CobService } from './cob.service';

describe('CobService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CobService = TestBed.get(CobService);
    expect(service).toBeTruthy();
  });
});
