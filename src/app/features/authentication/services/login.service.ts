import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfig } from '@config/api.config';
import { AuthService } from '@shared/services/auth.service';
import { BaseService } from '@shared/services/abstractions/base.service';
import { LoggerService } from '@shared/services/logger.service';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LoginRequest, LoginResponse } from './types';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {
  constructor(
    logger: LoggerService,
    private authenticationService: AuthService,
    private http: HttpClient,
  ) {
    super(logger);
  }

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post(ApiConfig.url(ApiConfig.endpoints.authentication.login), request, {
      responseType: 'text'
    })
    .pipe(
      catchError(this.handleError<string>(this.login.name)),
      tap((response) => {
        this.authenticationService.login(response);
      }),
      map((response) => {
        return {
          token: response
        } as LoginResponse;
      })
    );
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
