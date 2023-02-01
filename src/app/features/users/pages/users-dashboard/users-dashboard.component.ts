import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppConfig } from '@app/config/app.config';
import { ApplicationService } from '@app/features/applications/services/application.service';
import { CreateUser, GetCompaniesRoles } from '../../services/types';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss']
})
export class UsersDashboardComponent {
  
    form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      companyId: ['', [Validators.required]],
      roleId: ['', [Validators.required]],
    });

    companiesRoles?: GetCompaniesRoles
    employeeId?: string;

    constructor(private userService: UserService, private applicationService: ApplicationService, private formBuilder: FormBuilder) {
      
    }

    ngOnInit(): void {
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
          console.log("worked")
          console.log(data);
        },
        error: (error) => {
          console.log("error")
          console.log(error);
        }
      });
    }
}
