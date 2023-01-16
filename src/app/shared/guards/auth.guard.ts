import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AppConfig } from '@app/config/app.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.isUserAuthenticated());
      console.log(sessionStorage.getItem(AppConfig.storage.keys.accessToken));

    if (this.isUserAuthenticated()) {
      return true;
    } else {
      this.redirectToLogin();
      return false;
    }
  }

  private isUserAuthenticated(): boolean {
    const token = sessionStorage.getItem(AppConfig.storage.keys.accessToken);
    return token !== null && token !== undefined && token !== '';
  }

  private redirectToLogin(): void {
    this.router.navigate([AppConfig.routes.authentication.login.fullPath]);
  }

}
