import { TestBed } from '@angular/core/testing';

import { PageInfoService } from './page-info.service';

describe('PageInfoService', () => {
  let service: PageInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
