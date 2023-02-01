import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersDashboardComponent } from './pages/users-dashboard/users-dashboard.component';
import { SharedModule } from "@shared/shared.module";


@NgModule({
  declarations: [
    UsersDashboardComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
