import { TestBed } from '@angular/core/testing';

import { ElectionResolver } from './election.resolver';

describe('ElectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectionResolver = TestBed.get(ElectionResolver);
    expect(service).toBeTruthy();
  });
});
