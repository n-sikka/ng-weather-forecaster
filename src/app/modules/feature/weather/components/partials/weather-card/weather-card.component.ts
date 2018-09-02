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
  @Input() todaysForecast: Array<any>;
  @Input() days: Array<any>;

  forecastData: any;
  selectedUnit: string = 'C';
  isCelcius: boolean = true;

  constructor(
    public unitConvertor: UnitConvertorService, 
    private datePipe: DatePipe) { }

  ngOnInit() {
  }

  onUnitChanged(isC: boolean) {
    if (isC)
      this.selectedUnit = 'C';
    else
      this.selectedUnit = 'F';
  }
}
