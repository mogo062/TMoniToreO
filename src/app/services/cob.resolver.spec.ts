import { TestBed } from '@angular/core/testing';

import { CobResolver } from './cob.resolver';

describe('CobResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CobResolver = TestBed.get(CobResolver);
    expect(service).toBeTruthy();
  });
});
