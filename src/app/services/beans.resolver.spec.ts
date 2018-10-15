import { TestBed } from '@angular/core/testing';

import { BeansResolverService } from './beans.resolver';

describe('BeansResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeansResolverService = TestBed.get(BeansResolverService);
    expect(service).toBeTruthy();
  });
});
