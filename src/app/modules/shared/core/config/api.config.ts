import { InjectionToken } from "@angular/core";

import { IAppConfig } from './app.config.interface';

export let API_CONFIG = new InjectionToken("app.config");

export const ApiConfig: IAppConfig = {
    weatherServer: "https://api.openweathermap.org/data/2.5/",
    weatherApi: 'weather?q=',
    forecastApi: 'forecast?q=',
    weatherApiAppId: '646a8aad55b7582acd83911301ab2ef4'
}