// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Core/Shared Modules
 */
import {
  CoreModule,
  UIModule,
  ServiceModule
} from '@app/shared/';

/**
 * Feature Modules
 */
import {
  WeatherModule
} from '@app/feature/';

// App Config/APIs etc
import { API_CONFIG, ApiConfig } from  '@app/shared/core/';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    CoreModule.forRoot(),
    UIModule.forRoot(),
    ServiceModule,

    WeatherModule,
    AppRoutingModule
  ],
  exports: [
    CoreModule,
    UIModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { 
      provide: API_CONFIG, 
      useValue: ApiConfig 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
