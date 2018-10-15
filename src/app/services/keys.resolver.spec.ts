import { TestBed } from '@angular/core/testing';

import { KeysResolverService } from './keys.resolver';

describe('KeysResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeysResolverService = TestBed.get(KeysResolverService);
    expect(service).toBeTruthy();
  });
});
