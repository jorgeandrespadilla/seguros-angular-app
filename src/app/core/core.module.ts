import { NgModule } from '@angular/core';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    NotFoundComponent,
  ]
})
export class CoreModule { }
