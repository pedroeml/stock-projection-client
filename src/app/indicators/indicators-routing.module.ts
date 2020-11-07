import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndicatorsContainerComponent } from './indicators-container/indicators-container.component';

const routes: Routes = [{
  path: '',
  component: IndicatorsContainerComponent,
}, {
  path: ':ticker',
  component: IndicatorsContainerComponent,
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class IndicatorsRoutingModule { }
