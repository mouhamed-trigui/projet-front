import { TestBed } from '@angular/core/testing';

import { RhCongeService } from './rh-conge.service';

describe('RhCongeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RhCongeService = TestBed.get(RhCongeService);
    expect(service).toBeTruthy();
  });
});
