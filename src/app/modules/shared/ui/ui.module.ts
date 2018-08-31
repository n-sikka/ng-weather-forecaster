import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { 
  NavbarComponent
} from './components/';

export {
  NavbarComponent
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    FormsModule,
    NavbarComponent
  ],
  declarations: [
    NavbarComponent
  ]
})
export class UIModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UIModule
    };
  }
}
