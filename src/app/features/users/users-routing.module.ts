import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConfig } from '@app/config/app.config';
import { UsersDashboardComponent } from './pages/users-dashboard/users-dashboard.component';

const routes: Routes = [
  {
    path: AppConfig.routes.users.dashboard.currentPath,
    component: UsersDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
