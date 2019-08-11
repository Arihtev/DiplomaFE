import { TestBed } from '@angular/core/testing';

import { EaseinLogicService } from './easein-logic.service';

describe('EaseinLogicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EaseinLogicService = TestBed.get(EaseinLogicService);
    expect(service).toBeTruthy();
  });
});
