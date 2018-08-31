import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http';

import {
  AuthService,
  WeatherService
} from './app';

import {
  AuthGuard
} from './guards';

export {
  AuthService,
  AuthGuard,
  WeatherService
}

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
  ],
  providers: [
    AuthService,
    AuthGuard,
    WeatherService
  ]
})
export class ServiceModule { }
