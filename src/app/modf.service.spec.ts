import { TestBed } from '@angular/core/testing';

import { ModfService } from './modf.service';

describe('ModfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModfService = TestBed.get(ModfService);
    expect(service).toBeTruthy();
  });
});
