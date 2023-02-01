import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APP_CONFIG } from '@config/app.config';
import { AppConfig, Currency } from '@config/types';
import { LoginService } from '@app/features/authentication/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hidePassword = true;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    currency: new FormControl<Currency>('USD', [Validators.required]),
  });

  constructor(
    private snackBar: MatSnackBar,
    private loginService: LoginService,
    private router: Router,
    @Inject(APP_CONFIG) public appConfig: AppConfig,
  ) { }

  ngOnInit(): void {
    this.loginService.logout();
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
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
    this.loginService.login(request)
      .subscribe({
        complete: () => {
          console.log('AuthenticationService.login() complete');
          this.router.navigate([this.appConfig.routes.root.fullPath]);
        },
        error: (error) => {
          this.snackBar.open('Credenciales inválidas', 'Aceptar', {
            duration: 5000,
          });
          console.error('AuthenticationService.login() error:', error);
        }
      });
  }
}
