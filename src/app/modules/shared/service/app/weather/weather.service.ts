import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { API_CONFIG, IAppConfig } from '@app/shared/core/'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  conf: any;
  weatherApi: string;
  forecastApi: string;
  private _weatherApiAppId: string;

  constructor(
    @Inject(API_CONFIG) private config: IAppConfig,
    private http: HttpClient,
    private router: Router
  ) {
    this.conf = config;
    this.weatherApi = this.conf.weatherServer + this.conf.weatherApi;
    this.forecastApi = this.conf.weatherServer + this.conf.forecastApi;
    this._weatherApiAppId = '&appid='+this.conf.weatherApiAppId;
  }

  public getCities(): Observable<any> {
    const CITIES = require('../../../data/city.list.json');
    console.log(CITIES.length)
    return of(CITIES)
  }

  public getWeatherByCityName(cityName: string) {
    return this.http.get(this.weatherApi+cityName+this._weatherApiAppId)
  }

  public getForecastByCityName(cityName: string) {
    return this.http.get(this.forecastApi+cityName+this._weatherApiAppId)
  }
}
