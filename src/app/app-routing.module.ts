import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConfig } from './config/app.config';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: AppConfig.routes.authentication.currentPath,
    loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: AppConfig.routes.applications.currentPath,
    loadChildren: () => import('./features/applications/applications.module').then(m => m.ApplicationsModule),
    canActivate: [AuthGuard]
  },
  {
    path: AppConfig.routes.notFound.currentPath,
    component: NotFoundComponent
  },
  {
    path: AppConfig.routes.root.currentPath,
    redirectTo: AppConfig.routes.home,
    pathMatch: 'full'
  },
  {
    path: AppConfig.routes.all,
    redirectTo: AppConfig.routes.notFound.fullPath
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
