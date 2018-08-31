import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { API_CONFIG, IAppConfig } from '@app/shared/core/'



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  conf: any;
  weatherApi: string;

  constructor(
    @Inject(API_CONFIG) private config: IAppConfig,
    private http: Http,
    private router: Router
  ) {
    this.conf = config;
    this.weatherApi = this.conf.server + this.conf.weatherApiString;
  }

  getPrediction() {
    return true;
  }
}
