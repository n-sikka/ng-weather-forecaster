import { InjectionToken } from "@angular/core";

import { IAppConfig } from './app.config.interface';

export let API_CONFIG = new InjectionToken("app.config");

export const ApiConfig: IAppConfig = {
    server: "http://127.0.0.1:9000",
    weatherApiString: 'weatherApi'
}