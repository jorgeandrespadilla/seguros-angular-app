import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConfig } from '@app/config/app.config';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.scss']
})
export class AddApplicationComponent {
  addApplicationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    policyNumber: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private applicationService: ApplicationService,
  ) { }

  onSubmit() {
    // Validate form
    if (!this.addApplicationForm.valid) {
      return;
    }
    const request = {
      name: this.addApplicationForm.value.name ?? '',
      policyNumber: this.addApplicationForm.value.policyNumber ?? '',
      description: this.addApplicationForm.value.description ?? '',
    };
    this.applicationService.addApplication(request)
      .subscribe({
        complete: () => {
          console.log('ApplicationService.addApplication() complete');
        },
        error: (error) => {
          console.error('ApplicationService.addApplication() error:', error);
        }
      });
    this.router.navigate([AppConfig.routes.applications.fullPath]);
  }

}
