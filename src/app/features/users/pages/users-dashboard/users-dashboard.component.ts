import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppConfig } from '@app/config/app.config';
import { CreateUser, GetCompaniesRoles } from '../../services/types';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss']
})
export class UsersDashboardComponent {
  hidePassword = true;

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    roleId: new FormControl('', [Validators.required]),
    companyId: new FormControl('', []),
  });

  companiesRoles?: GetCompaniesRoles
  employeeId?: string;

  constructor(
    private snackBar: MatSnackBar,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.form.get("roleId")?.valueChanges.subscribe((value) => this.roleValidator(value!));
    this.userService.getCompaniesRoles().subscribe({
      next: (data) => {
        console.log(data);
        this.companiesRoles = data;
        this.employeeId = this.companiesRoles?.roles.find(role => role.name === AppConfig.roles.employee)?.id;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  roleValidator(roleId: string) {
    if (roleId === this.employeeId) {
      this.form.controls.companyId.setValidators([Validators.required]);
    } else {
      this.form.controls.companyId.clearValidators();
    }
    this.form.controls.companyId.updateValueAndValidity();
  }

  onSubmit() {
    const roleId = this.form.value.roleId!

    const payload: CreateUser = {
      username: this.form.value.username!,
      password: this.form.value.password!,
      roleId: roleId,
      companyId: roleId === this.employeeId ? Number(this.form.value.companyId!) : undefined
    }

    this.userService.createUser(payload).subscribe({
      next: (data) => {
        this.snackBar.open('Usuario creado', 'Aceptar', {
          duration: 5000,
        });
        console.log("worked", data);
      },
      error: (error) => {
        this.snackBar.open('Error al crear usuario', 'Aceptar', {
          duration: 5000,
        });
        console.log("error", error);
      }
    });
  }
}
