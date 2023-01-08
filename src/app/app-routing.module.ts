import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConfig } from './config/app.config';
import { HomeComponent } from './core/pages/home/home.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: AppConfig.routes.authentication.currentPath, loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: AppConfig.routes.home.currentPath, component: HomeComponent, canActivate: [AuthGuard] },
  { path: AppConfig.routes.notFound.currentPath, component: NotFoundComponent },
  { path: AppConfig.routes.root.currentPath, redirectTo: AppConfig.routes.home.fullPath, pathMatch: 'full' },
  { path: '**', redirectTo: AppConfig.routes.notFound.fullPath }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
