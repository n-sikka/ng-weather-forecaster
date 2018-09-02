import { Injectable, OnInit } from '@angular/core';
import { of } from 'rxjs';

import { City } from '../../entities/city';
import { WeatherService } from '@app/shared/service/';

@Injectable({
  providedIn: 'root'
})
export class CityFacade implements OnInit{

  constructor(private weatherService: WeatherService) { }

  cities: Array<City>;

  ngOnInit() {
    this.getCityList()
  }
  private async _getCityObservable(): Promise<any> {
    const response = await this.weatherService.getCities().subscribe((res) => {
      if (!this.cities) {
        this.cities = []
      }
      res.forEach(city => {
        this.cities.push(new City(city))
      });
    });
    return of(response);
  }

  public getCityList(): Array<City> {
    if (!this.cities) {
      this._getCityObservable().then((cityArr) => {
        this.cities = cityArr;
      })
      return this.cities;
    }     
    return this.cities;
  }
}
