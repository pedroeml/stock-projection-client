import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartContainerComponent } from './chart-container/chart-container.component';

const routes: Routes = [{
  path: ':ticker',
  component: ChartContainerComponent,
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class StockChartRoutingModule { }
