import { TestBed } from '@angular/core/testing';

import { ElectionAuthorityService } from './election-authority.service';

describe('ElectionAuthorityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectionAuthorityService = TestBed.get(ElectionAuthorityService);
    expect(service).toBeTruthy();
  });
});
