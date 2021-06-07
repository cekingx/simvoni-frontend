import { TestBed } from '@angular/core/testing';

import { FollowedElectionDetailResolver } from './followed-election-detail.resolver';

describe('FollowedElectionDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FollowedElectionDetailResolver = TestBed.get(FollowedElectionDetailResolver);
    expect(service).toBeTruthy();
  });
});
