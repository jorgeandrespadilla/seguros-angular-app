import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConfig } from '@app/config/app.config';
import { AddApplicationComponent } from './pages/add-application/add-application.component';
import { ApplicationDetailComponent } from './pages/application-detail/application-detail.component';
import { ApplicationsDashboardComponent } from './pages/applications-dashboard/applications-dashboard.component';

const routes: Routes = [
  {
    path: AppConfig.routes.applications.dashboard.currentPath,
    component: ApplicationsDashboardComponent
  },
  {
    path: AppConfig.routes.applications.new.currentPath,
    component: AddApplicationComponent
  },
  {
    path: AppConfig.routes.applications.detail.currentPath,
    component: ApplicationDetailComponent
  },
  {
    path: AppConfig.routes.root.currentPath,
    redirectTo: AppConfig.routes.applications.dashboard.fullPath,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
