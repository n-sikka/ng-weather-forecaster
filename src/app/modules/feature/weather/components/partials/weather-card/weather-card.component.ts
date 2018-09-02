import { Component, OnInit, Input } from '@angular/core';
import { UnitConvertorService } from '../../../facade';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  providers: [ DatePipe ]
})
export class WeatherCardComponent implements OnInit {

  @Input() forecast: any;
  @Input() city: string;
  selectedUnit: string = 'C';
  isCelcius: boolean = true;
  morningTemp; morningTempArr[0]

  constructor(
    public unitConvertor: UnitConvertorService, 
    private datePipe: DatePipe) { }

  ngOnInit() {
    console.log(this.forecast)
    this.getMorningTemp()
  }

  onUnitChanged(isC: boolean) {
    if (isC)
      this.selectedUnit = 'C';
    else
      this.selectedUnit = 'F';
  }

  // isWhat(datetime) {
  //   let time = parseInt(this.datePipe.transform(datetime, 'HHmm'));
  //   if (time <= 1130) {
  //     console.log(time, 'is morning');
  //   } else if (time > 1130 && time <= 1730) {
  //     console.log(time, 'is day');
  //   } else if (time > 1730 && time <= 2030) {
  //     console.log(time, 'is evening');
  //   } else if (time > 2030 && time <= 2330) {
  //     console.log(time, 'is night');       
  //   } else { 
  //     return
  //   }
  // }

  isMorning(datetime) {
    let time = parseInt(this.datePipe.transform(datetime, 'HHmm'));
    return time <= 1130; 
  }

  getMorningTemp() {
    let morningTempArr = [];
    this.forecast.forEach(date => {
      if (this.isMorning(date.dt*1000)) {
        morningTempArr.push(date.main.temp)
      }
    }); 
    return morningTempArr[0];
  }

  getDayTemp() {
    let dayTempArr = [];
    this.forecast.forEach(date => {
      if (this.isDay(date.dt*1000)) {
        dayTempArr.push(date.main.temp)
      }
    }); 
    return dayTempArr[0];
  }

  getEveningTemp() {
    let eveningTempArr = [];
    this.forecast.forEach(date => {
      if (this.isDay(date.dt*1000)) {
        eveningTempArr.push(date.main.temp)
      }
    }); 
    return eveningTempArr[0];
  }

  getNightTemp() {
    let NightTempArr = [];
    this.forecast.forEach(date => {
      if (this.isDay(date.dt*1000)) {
        NightTempArr.push(date.main.temp)
      }
    }); 
    return NightTempArr[0];
  }

  isDay(datetime) {
    let time = parseInt(this.datePipe.transform(datetime, 'HHmm'));
    return time > 1130 && time <= 1730; 
  }

  isEvening(datetime) {
    let time = parseInt(this.datePipe.transform(datetime, 'HHmm'));
    return time > 1730 && time <= 2030; 
  }

  isNight(datetime) {
    let time = parseInt(this.datePipe.transform(datetime, 'HHmm'));
    return time > 2030 && time <= 2330; 
  }

}
