import { InjectionToken } from "@angular/core";
import { environment } from "src/environments/environment";
import { AppConfig as AppConfigType } from "./types";

export const APP_CONFIG = new InjectionToken<AppConfigType>('app.config');

export const AppConfig = {
  title: environment.title,
  production: environment.production,
  currencies: ['USD', 'EUR', 'RMB'] as const,
}
