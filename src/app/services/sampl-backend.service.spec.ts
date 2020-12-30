import { TestBed } from '@angular/core/testing';

import { SamplBackendService } from './sampl-backend.service';

describe('SamplBackendService', () => {
  let service: SamplBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamplBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
