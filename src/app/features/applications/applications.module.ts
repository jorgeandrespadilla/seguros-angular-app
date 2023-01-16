import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsDashboardComponent } from './pages/applications-dashboard/applications-dashboard.component';
import { ApplicationDetailComponent } from './pages/application-detail/application-detail.component';
import { AddApplicationComponent } from './pages/add-application/add-application.component';
import { SharedModule } from "@shared/shared.module";



@NgModule({
    declarations: [
        ApplicationsDashboardComponent,
        ApplicationDetailComponent,
        AddApplicationComponent,
    ],
    imports: [
        CommonModule,
        ApplicationsRoutingModule,
        SharedModule
    ]
})
export class ApplicationsModule { }
