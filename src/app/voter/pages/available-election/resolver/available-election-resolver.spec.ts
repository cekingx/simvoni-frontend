import { TestBed } from '@angular/core/testing';
import { AvailableElectionResolver } from './available-election.resolver';

describe('AvailableElectonResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvailableElectionResolver = TestBed.get(AvailableElectionResolver);
    expect(service).toBeTruthy();
  });
});
