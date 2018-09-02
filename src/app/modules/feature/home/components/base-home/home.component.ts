import { Component, OnInit, OnChanges, SimpleChanges, ElementRef, ViewChild, HostListener } from '@angular/core';

import { CityFacade } from '../../facade/';
import { City } from '../../entities/city';
import { Router } from '@angular/router';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cityArray: Array<City>;
  searchTerm: string;
  
  constructor(
    private cityService: CityFacade,
    private router: Router) { 
    this.searchTerm = '';
  }

  ngOnInit() {
    this.cityArray = this.cityService.getCityList();
  }

  citySelected(selectedItem) {
    this.router.navigate(['weather'],  { queryParams: { q: `${selectedItem.name},${selectedItem.country}` }})
  }

  getPosition() {

  }  
}
