import { TestBed } from '@angular/core/testing';

import { ElectionAuthorityResolver } from './election-authority.resolver';

describe('ElectionAuthorityResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectionAuthorityResolver = TestBed.get(ElectionAuthorityResolver);
    expect(service).toBeTruthy();
  });
});
