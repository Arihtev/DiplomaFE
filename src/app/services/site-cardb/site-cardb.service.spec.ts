import { TestBed } from '@angular/core/testing';

import { SiteCardbService } from './site-cardb.service';

describe('SiteCardbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiteCardbService = TestBed.get(SiteCardbService);
    expect(service).toBeTruthy();
  });
});
