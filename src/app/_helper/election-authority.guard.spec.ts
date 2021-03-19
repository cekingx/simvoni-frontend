import { TestBed, async, inject } from '@angular/core/testing';

import { ElectionAuthorityGuard } from './election-authority.guard';

describe('ElectionAuthorityGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectionAuthorityGuard]
    });
  });

  it('should ...', inject([ElectionAuthorityGuard], (guard: ElectionAuthorityGuard) => {
    expect(guard).toBeTruthy();
  }));
});
