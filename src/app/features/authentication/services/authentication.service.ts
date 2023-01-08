import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfig } from '@app/config/api.config';
import { AppConfig } from '@app/config/app.config';
import { BaseService } from '@app/shared/services/base.service';
import { LoggerService } from '@app/shared/services/logger.service';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoginRequest, LoginResponse } from './types';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {
  constructor(
    logger: LoggerService,
    private http: HttpClient,
  ) {
    super(logger);
  }

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(ApiConfig.url(ApiConfig.endpoints.authentication.login), request)
    .pipe(
      catchError(this.handleError<LoginResponse>(this.login.name)),
      tap((response) => {
        sessionStorage.setItem(AppConfig.storage.keys.accessToken, response.token);
      }),
    );
  }
}
