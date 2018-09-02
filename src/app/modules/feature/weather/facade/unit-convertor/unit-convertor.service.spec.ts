import { TestBed, inject } from '@angular/core/testing';

import { UnitConvertorService } from './unit-convertor.service';

describe('UnitConvertorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitConvertorService]
    });
  });

  it('should be created', inject([UnitConvertorService], (service: UnitConvertorService) => {
    expect(service).toBeTruthy();
  }));
});
