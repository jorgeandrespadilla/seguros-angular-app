import { InjectionToken } from "@angular/core";
import { environment } from "src/environments/environment";
import { AppConfig as AppConfigType } from "./types";

export const APP_CONFIG = new InjectionToken<AppConfigType>('app.config');

const routeNames = {
  authenticationIndex: 'auth',
  home: 'home',
  notFound: '404',
  authentication: {
    login: 'login',
  },
} as const;

export const AppConfig = {
  title: environment.title,
  production: environment.production,
  storage: {
    keys: {
      accessToken: `access_token`,
    },
  },
  currencies: ['USD', 'EUR', 'RMB'] as const,
  logLevels: ['debug', 'info', 'warn', 'error'] as const,
  routes: {
    root: {
      currentPath: '',
      fullPath: '/',
    },
    authentication: {
      currentPath: routeNames.authenticationIndex,
      fullPath: `/${routeNames.authenticationIndex}`,
      login: {
        currentPath: routeNames.authentication.login,
        fullPath: `/${routeNames.authenticationIndex}/${routeNames.authentication.login}`,
      },
    },
    home: {
      currentPath: routeNames.home,
      fullPath: `/${routeNames.home}`,
    },
    notFound: {
      currentPath: routeNames.notFound,
      fullPath: `/${routeNames.notFound}`,
    },
  } as const,
}
