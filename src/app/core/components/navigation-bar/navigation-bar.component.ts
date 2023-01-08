import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG } from '@app/config/app.config';
import { AppConfig } from '@app/config/types';
import { AuthService } from '@app/shared/services/auth.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(APP_CONFIG) public appConfig: AppConfig,
  ) { }

  handleLogout(): void {
    this.authService.logout();
    this.router.navigate([this.appConfig.routes.authentication.login.fullPath]);
  }
}
