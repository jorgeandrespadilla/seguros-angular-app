import { InjectionToken } from "@angular/core";
import { environment } from "src/environments/environment";
import { AppConfig as AppConfigType } from "./types";

export const APP_CONFIG = new InjectionToken<AppConfigType>('app.config');

const routeNames = {
  authenticationIndex: 'auth',
  applicationsIndex: 'applications',
  notFound: '404',
  authentication: {
    login: 'login',
  },
  applications: {
    dashboard: 'dashboard',
    new: 'new',
    detail: 'detail/:id',
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
    all: '**',
    home: `/${routeNames.applicationsIndex}/${routeNames.applications.dashboard}`,
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
    applications: {
      currentPath: routeNames.applicationsIndex,
      fullPath: `/${routeNames.applicationsIndex}`,
      dashboard: {
        currentPath: routeNames.applications.dashboard,
        fullPath: `/${routeNames.applicationsIndex}/${routeNames.applications.dashboard}`,
      },
      new: {
        currentPath: routeNames.applications.new,
        fullPath: `/${routeNames.applicationsIndex}/${routeNames.applications.new}`,
      },
      detail: {
        currentPath: routeNames.applications.detail,
        fullPath: `/${routeNames.applicationsIndex}/${routeNames.applications.detail}`,
      },
    },
    notFound: {
      currentPath: routeNames.notFound,
      fullPath: `/${routeNames.notFound}`,
    },
  } as const,
}
