import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2SearchPipeModule, Ng2SearchPipe } from 'ng2-search-filter';

import {
  UIModule
} from '@app/shared/'

import { HomeRoutingModule } from './home-routing.module';

import { TypeaheadComponent, HomeComponent } from './components/';
import { HomeContainer } from './container/';

import { 
  CityFacade,
} from './facade/';

@NgModule({
  imports: [
    CommonModule,
    UIModule,
    HomeRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    HomeComponent,
    HomeContainer,
    TypeaheadComponent
  ],
  providers: [
    CityFacade,
    Ng2SearchPipe
  ]
})
export class HomeModule { }
