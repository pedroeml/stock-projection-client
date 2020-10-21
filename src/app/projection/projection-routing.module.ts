import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectionContainerComponent } from './projection-container/projection-container.component';

const routes: Routes = [{
  path: ':ticker',
  component: ProjectionContainerComponent,
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ProjectionRoutingModule { }
