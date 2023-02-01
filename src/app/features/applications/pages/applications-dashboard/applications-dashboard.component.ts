import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppConfig } from '@app/config/app.config';
import { AuthService } from '@app/shared/services/auth.service';
import { ApplicationService } from '../../services/application.service';
import { GetCompaniesRequest } from '../../services/types';

@Component({
  selector: 'app-applications-dashboard',
  templateUrl: './applications-dashboard.component.html',
  styleUrls: ['./applications-dashboard.component.scss']
})
export class ApplicationsDashboardComponent {

  filterForm = new FormGroup({
    fechaInicio: new FormControl(new Date(), [Validators.required]),
    fechaFin: new FormControl(new Date(), [Validators.required]),
  });

  $companies = this.applicationService.getCompanies({
    fechaInicio: undefined,
    fechaFin: undefined,
  });
  canAddApplication = this.authenticationService.getAccessToken().role === AppConfig.roles.employee;

  constructor(
    private applicationService: ApplicationService,
    private authenticationService: AuthService,
  ) { }

  applyFilter() {
    const request: GetCompaniesRequest = {
      fechaInicio: this.filterForm.value.fechaInicio!,
      fechaFin: this.filterForm.value.fechaFin!,
    };
    this.$companies = this.applicationService.getCompanies(request);
  }

}
