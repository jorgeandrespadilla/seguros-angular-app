import { InjectionToken } from "@angular/core";
import { environment } from "src/environments/environment";
import { ApiConfig as ApiConfigType } from "./types";

export const API_CONFIG = new InjectionToken<ApiConfigType>('api.config');

export const ApiConfig = {
  baseUrl: environment.api,
  endpoints: {
    authentication: {
      login: '/auth/login',
    },
    applications: {
      companies: '/Companies',
      applications: '/Companies/Applications',
    },
  },
  url: (path: string) => ApiConfig.baseUrl + path,
};
