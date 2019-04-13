import { TestBed } from '@angular/core/testing';

import { RhEvaluationService } from './rh-evaluation.service';

describe('RhEvaluationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RhEvaluationService = TestBed.get(RhEvaluationService);
    expect(service).toBeTruthy();
  });
});
