import { TestBed } from '@angular/core/testing';

import { RhPermissionService } from './rh-permission.service';

describe('RhPermissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RhPermissionService = TestBed.get(RhPermissionService);
    expect(service).toBeTruthy();
  });
});
