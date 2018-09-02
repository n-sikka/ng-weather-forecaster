import { TestBed, inject } from '@angular/core/testing';

import { WeatherFacade } from './weather.facade';

describe('WeatherFacade', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherFacade]
    });
  });

  it('should be created', inject([WeatherFacade], (service: WeatherFacade) => {
    expect(service).toBeTruthy();
  }));
});
