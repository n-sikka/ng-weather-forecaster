import { 
  ModuleWithProviders, 
  NgModule, 
  Optional, 
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { API_CONFIG, ApiConfig } from  './config/api.config';
import { IAppConfig } from './config/app.config.interface'


export { 
  API_CONFIG, 
  ApiConfig,
  IAppConfig
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule
  ]
})

export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { 
          // this provides appconfig useage app-wide
          provide: API_CONFIG, 
          useValue: ApiConfig 
        },
      ]
    };
  }
}
