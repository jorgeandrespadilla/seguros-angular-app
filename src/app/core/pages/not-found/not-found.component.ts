import { Component, Inject } from '@angular/core';
import { APP_CONFIG } from '@app/config/app.config';
import { AppConfig } from '@app/config/types';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor(
    @Inject(APP_CONFIG) public appConfig: AppConfig,
  ) { }
}
