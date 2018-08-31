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

  constructor(
    @Inject(API_CONFIG) private config: IAppConfig,
    private http: HttpClient,
    private router: Router
  ) {
    this.conf = config;
    this.weatherApi = this.conf.server + this.conf.weatherApiString;
  }

  public getCities(): Observable<any> {
    const CITIES = require('../../../data/city.list.min.json');
    return of(CITIES);
  }
}
