import { NgModule } from '@angular/core';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    HomeComponent,
    NavigationBarComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    NotFoundComponent,
    HomeComponent
  ]
})
export class CoreModule { }
