import { Injectable } from '@angular/core';
import { AppConfig } from '@app/config/app.config';
import jwtDecode from 'jwt-decode';
import { TokenData } from './types';

const accessTokenKey = AppConfig.storage.keys.accessToken;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public isAuthenticated(): boolean {
    const tokenData = this.getAccessToken()
    if (tokenData && tokenData.exp) {
      const now = new Date();
      const exp = new Date(tokenData?.exp * 1000);
      return now < exp;
    }
    return false;
  }

  public login(accessToken: string): void {
    localStorage.setItem(accessTokenKey, accessToken);
  }

  public logout(): void {
    localStorage.removeItem(accessTokenKey);
  }

  public getRawAccessToken(): string {
    return localStorage.getItem(accessTokenKey) ?? "";
  }

  public getAccessToken(): TokenData {
    return this.tryDecodeToken(this.getRawAccessToken());
  }

  private tryDecodeToken(token: string): TokenData {
    try {
      return jwtDecode(token);
    } catch (error) {
      return {
        companyId: 0,
        role: '',
        username: '',
      } as TokenData;
    }
  }

}
