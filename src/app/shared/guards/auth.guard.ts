import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AppConfig } from '@app/config/app.config';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const roles = []

    if (route.data['roles']) {
      roles.push(...route.data['roles']);
    }

    if (this.authService.isAuthenticated()) {
      if (roles.length > 0 && !roles.includes(this.authService.getRole())) {
        this.redirectToHome();
        return false;
      }
      return true;
    } else {
      this.redirectToLogin();
      return false;
    }
  }

  private redirectToHome(): void {
    if (this.authService.getRole() === AppConfig.roles.admin) {
    this.router.navigate([AppConfig.routes.users.dashboard.fullPath]);
    } else {
      this.router.navigate([AppConfig.routes.applications.dashboard.fullPath]);
    }
  }

  private redirectToLogin(): void {
    this.router.navigate([AppConfig.routes.authentication.login.fullPath]);
  }

}
