import { Injectable } from '@angular/core';

import { WeatherService } from '@app/shared/service/';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherFacade {

  currentWeather: object;
  forecastWeather: object;
  
  constructor(private weatherService: WeatherService) { }

  _getForecastObservable(city): Promise<any> {
    console.log('3 - fetching forecast....')
    return this.weatherService.getForecastByCityName(city).toPromise();
  }

  public getWeather(cityName) {
    this.weatherService.getWeatherByCityName(cityName)
        .subscribe((res) => {
          console.log(res, 'weather')
        })
  }
  
  public async getForecast(cityName) {
    let something = await this._getForecastObservable(cityName);
    return something.list;
  }
}
