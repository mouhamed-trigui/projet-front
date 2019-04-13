import { TestBed } from '@angular/core/testing';

import { RhDemanderecService } from './rh-demanderec.service';

describe('RhDemanderecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RhDemanderecService = TestBed.get(RhDemanderecService);
    expect(service).toBeTruthy();
  });
});
