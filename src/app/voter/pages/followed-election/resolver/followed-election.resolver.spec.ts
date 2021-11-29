import { TestBed } from '@angular/core/testing';

import { FollowedElectionResolver } from './followed-election.resolver';

describe('FollowedElectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FollowedElectionResolver = TestBed.get(FollowedElectionResolver);
    expect(service).toBeTruthy();
  });
});
