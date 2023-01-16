import { Injectable } from '@angular/core';
import { AppConfig } from '@app/config/app.config';

const accessTokenKey = AppConfig.storage.keys.accessToken;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public isAuthenticated(): boolean {
    const token = this.getAccessToken();
    return token !== null && token !== undefined && token !== '';
  }

  public login(accessToken: string): void {
    localStorage.setItem(accessTokenKey, accessToken);
  }

  public logout(): void {
    localStorage.removeItem(accessTokenKey);
  }

  public getAccessToken(): string {
    return localStorage.getItem(accessTokenKey) ?? "";
  }
}
