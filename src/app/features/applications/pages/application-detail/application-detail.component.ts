import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APP_CONFIG } from '@app/config/app.config';
import { AppConfig } from '@app/config/types';
import { Subscription } from 'rxjs';
import { ApplicationService } from '../../services/application.service';
import { ApplicationDetail } from '../../services/types';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.scss']
})
export class ApplicationDetailComponent {

  private id: number

  private applicationDetailSubscription?: Subscription

  applicationDetail?: ApplicationDetail

  constructor(
    private applicationService: ApplicationService,
    private route: ActivatedRoute,
    @Inject(APP_CONFIG) public appConfig: AppConfig,
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.applicationDetailSubscription = this.applicationService.getApplication(this.id).subscribe((applicationDetail) => {
      this.applicationDetail = applicationDetail;
    });
  }

  ngOnDestroy(): void {
    this.applicationDetailSubscription?.unsubscribe();
  }
}
