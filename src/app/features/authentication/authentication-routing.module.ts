import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConfig } from '@app/config/app.config';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: AppConfig.routes.authentication.login.currentPath,
    component: LoginComponent
  },
  {
    path: AppConfig.routes.root.currentPath,
    redirectTo: AppConfig.routes.authentication.login.fullPath,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
