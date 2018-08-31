import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  UIModule
} from '@app/shared/'

import { WeatherRoutingModule } from './weather-routing.module';

import { WeatherHomeComponent } from './components/';
import { WeatherContainer } from './container/';
import { CityFacade } from './facade/'

@NgModule({
  imports: [
    CommonModule,
    UIModule,
    WeatherRoutingModule
  ],
  declarations: [
    WeatherHomeComponent,
    WeatherContainer
  ],
  providers: [
    CityFacade
  ]
})
export class WeatherModule { }
