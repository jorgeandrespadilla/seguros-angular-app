import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from '@app/config/app.config';
import { AuthService } from '@app/shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  handleLogout(): void {
    this.authService.logout();
    this.router.navigate([AppConfig.routes.authentication.login.fullPath]);
  }
}
