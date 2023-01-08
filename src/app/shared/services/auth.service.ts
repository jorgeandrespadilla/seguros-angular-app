import { Injectable } from '@angular/core';
import { AppConfig } from '@app/config/app.config';
import { BrowserStorageService } from './abstractions/browser-storage.service';

const accessTokenKey = AppConfig.storage.keys.accessToken;

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BrowserStorageService {

  constructor() {
    super(sessionStorage);
  }

  public isAuthenticated(): boolean {
    const token = this.getAccessToken();
    return token !== null && token !== undefined && token !== '';
  }

  public login(accessToken: string): void {
    this.set(accessTokenKey, accessToken);
  }

  public logout(): void {
    this.remove(accessTokenKey);
  }

  public getAccessToken(): string {
    return this.get(accessTokenKey) ?? '';
  }
}
