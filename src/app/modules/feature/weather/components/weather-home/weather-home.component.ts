import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

import { WeatherFacade, UnitConvertorService } from '../../facade';

@Component({
  selector: 'weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss'],
  providers: [ UnitConvertorService, DatePipe ]
})
export class WeatherHomeComponent implements OnInit {

  selectedCity: any;
  forecast: Array<any>;
  subGroup: object = {};
  daysArray: Array<string>;

  constructor(
    private weatherFacade: WeatherFacade,
    private route: ActivatedRoute,
    private datePipe: DatePipe) { 
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe((param) => {
        this.selectedCity = param['q'];
        this.getForecastData()
      })
  }

  async getForecastData() {
    this.forecast = await this.weatherFacade.getForecast(this.selectedCity)
    this.forecast.forEach((el) => {
      let date = this.datePipe.transform(el.dt*1000, 'ddmmyyyy');
      if (this.subGroup[date.toString()]) {
        this.subGroup[date.toString()].push(el);
      } else {
        this.subGroup[date.toString()] = []
        this.subGroup[date.toString()].push(el);
      }
    })
    this.daysArray = Object.keys(this.subGroup);
  }
}
