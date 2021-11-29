import { TestBed } from '@angular/core/testing';

import { ElectionParticipantResolver } from './election-participant.resolver';

describe('ElectionParticipantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectionParticipantResolver = TestBed.get(ElectionParticipantResolver);
    expect(service).toBeTruthy();
  });
});
