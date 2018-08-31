import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'

import {
  AuthService
} from './app';

import {
  AuthGuard
} from './guards';

export {
  AuthService,
  AuthGuard
}

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class ServiceModule { }
