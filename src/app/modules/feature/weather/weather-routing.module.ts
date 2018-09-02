import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherContainer } from './container/';
import { WeatherHomeComponent } from './components/';

const routes: Routes = [
  { 
    path: '', 
    component: WeatherContainer,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: WeatherHomeComponent,
        
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class WeatherRoutingModule { }
