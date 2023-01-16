import { Component } from '@angular/core';
import { AppConfig } from '@app/config/app.config';
import { AuthService } from '@app/shared/services/auth.service';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-applications-dashboard',
  templateUrl: './applications-dashboard.component.html',
  styleUrls: ['./applications-dashboard.component.scss']
})
export class ApplicationsDashboardComponent {

  $companies = this.applicationService.getCompanies();
  canAddApplication = this.authenticationService.getAccessToken().role === AppConfig.roles.employee;

  constructor(
    private applicationService: ApplicationService,
    private authenticationService: AuthService,
  ) { }

}
