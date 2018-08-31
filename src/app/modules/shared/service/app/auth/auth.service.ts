import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { API_CONFIG, IAppConfig } from '@app/shared/core/'
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  conf: any;
  authApi: string;

  constructor(
    @Inject(API_CONFIG) private config: IAppConfig,
    private http: Http,
    private router: Router
  ) {
    this.conf = config;
    this.authApi = this.conf.server + this.conf.authApi;
  }


  login(payload: any): Observable<any> {
    // return your HTTP method here.

    localStorage.setItem('user', payload.user.email);
    localStorage.setItem('isAuthenticated', 'true');
    
    return of(true)
  }

  register(payload: any): Observable<any> {
    // return your HTTP method here
    return of(payload);

  }


  logout(): boolean {

    if(localStorage.getItem('isAuthenticated')) {
      localStorage.clear();
      this.router.navigate(['/auth']);
      return true;
    } else {
      return false;
    }

  }
}
