import { TestBed } from '@angular/core/testing';

import { CarDatabaseService } from './car-database.service';

describe('CarDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarDatabaseService = TestBed.get(CarDatabaseService);
    expect(service).toBeTruthy();
  });
});
