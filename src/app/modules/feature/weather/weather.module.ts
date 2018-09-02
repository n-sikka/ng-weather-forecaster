import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2SearchPipeModule, Ng2SearchPipe } from 'ng2-search-filter';

import {
  UIModule
} from '@app/shared/'

import { WeatherRoutingModule } from './weather-routing.module';

import { WeatherHomeComponent } from './components/';
import { WeatherContainer } from './container/';

import { 
  WeatherFacade,
  UnitConvertorService
} from './facade/';
import { WeatherCardComponent } from './components/partials/weather-card/weather-card.component';

@NgModule({
  imports: [
    CommonModule,
    UIModule,
    WeatherRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    WeatherHomeComponent,
    WeatherContainer,
    WeatherCardComponent
  ],
  providers: [
    WeatherFacade,
    UnitConvertorService,
    Ng2SearchPipe
  ]
})
export class WeatherModule { }
