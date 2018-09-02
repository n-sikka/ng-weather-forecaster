import { TestBed, inject } from '@angular/core/testing';

import { CityFacade } from './city.facade';

describe('CityFacade', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityFacade]
    });
  });

  it('should be created', inject([CityFacade], (service: CityFacade) => {
    expect(service).toBeTruthy();
  }));
});
