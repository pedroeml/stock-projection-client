import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'cotacao',
  loadChildren: () => import('./stock-chart/stock-chart.module').then(m => m.StockChartModule),
}, {
  path: 'projecao',
  loadChildren: () => import('./projection/projection.module').then(m => m.ProjectionModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
