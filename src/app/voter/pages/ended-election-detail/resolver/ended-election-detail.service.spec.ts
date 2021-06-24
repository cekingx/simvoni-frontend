import { TestBed } from '@angular/core/testing';

import { EndedElectionDetailResolver } from './ended-election-detail.resolver';

describe('EndedElectionDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EndedElectionDetailResolver = TestBed.get(EndedElectionDetailResolver);
    expect(service).toBeTruthy();
  });
});
