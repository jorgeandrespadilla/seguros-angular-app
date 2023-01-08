import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppConfig, APP_CONFIG } from '../config/app.config';
import { ApiConfig, API_CONFIG } from '../config/api.config';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },
    { provide: API_CONFIG, useValue: ApiConfig },
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class SharedModule { }
