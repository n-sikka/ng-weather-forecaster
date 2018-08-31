import { Component, OnInit } from '@angular/core';

import { CityFacade } from '../../facade/city-facade/city.facade';
import { City } from '../../entities/city';
import { Subject } from 'rxjs';


@Component({
  selector: 'weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss']
})
export class WeatherHomeComponent implements OnInit {

  constructor(private cityService: CityFacade) { 
    this.query = '';
  }

  cityArray: Array<City>;
  selectedCity: string;
  limit: number = 10;
  searchText: Subject<string> = new Subject();
  query: string;
  typeaheadList: Array<City>;

  ngOnInit() {
    this.cityArray = this.cityService.getCityList();

    this.searchText.subscribe((keyword) => {
      if (keyword) {
        let city = this.cityArray.find((el) => {
          if (el.name.match(/keyword/i))
            return el;            
        })
      }

    })
  }

  search(data) {
    this.query += data.key;
    this.searchText.next(this.query);
  }

  getMoreOptions() {
    this.limit += 10;
  }

  
}
