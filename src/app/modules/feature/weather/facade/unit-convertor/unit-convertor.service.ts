import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitConvertorService {

  constructor() { }

  public kelvinToCelcius(temperature) {
    return temperature - 273.15;
  }

  public kelvinToFahrenheit(temperature) {
    return temperature * 9/5 - 459.67;
  }

  public celciusToFahrenheit(temperature) {

  }



}
