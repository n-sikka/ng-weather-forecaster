import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { 
    AuthGuard
} from '@app/shared/service/'


const appRoutes: Routes = [
    { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full'
    },
    { 
        path: 'home', 
        loadChildren: '@app/feature/weather/#WeatherModule',
        // canActivate: [ AuthGuard ]
    },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule {}