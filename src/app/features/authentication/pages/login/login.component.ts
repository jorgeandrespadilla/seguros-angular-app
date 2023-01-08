import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APP_CONFIG } from '@config/app.config';
import { AppConfig, Currency } from '@config/types';
import { AuthenticationService } from '@features/authentication/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  revealPassword = false;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    currency: new FormControl<Currency>('USD', [Validators.required]),
  });

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    @Inject(APP_CONFIG) public appConfig: AppConfig,
  ) { }

  togglePassword() {
    this.revealPassword = !this.revealPassword;
  }

  onSubmit() {
    // Validate form
    if (!this.loginForm.valid) {
      return;
    }
    const request = {
      username: this.loginForm.value.username ?? '',
      password: this.loginForm.value.password ?? '',
      currency: this.loginForm.value.currency ?? 'USD',
    };
    this.authService.login(request)
      .subscribe({
        complete: () => {
          console.log('AuthenticationService.login() complete');
          // Redirect to home page
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('AuthenticationService.login() error:', error);
        }
      });
  }
}
