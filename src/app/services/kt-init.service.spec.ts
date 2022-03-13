import { TestBed } from '@angular/core/testing';

import { KtInitService } from './kt-init.service';

describe('KtInitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KtInitService = TestBed.get(KtInitService);
    expect(service).toBeTruthy();
  });
});
