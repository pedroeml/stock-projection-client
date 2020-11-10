import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'inicio',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
}, {
  path: 'cotacao',
  loadChildren: () => import('./stock-chart/stock-chart.module').then(m => m.StockChartModule),
}, {
  path: 'projecao',
  loadChildren: () => import('./projection/projection.module').then(m => m.ProjectionModule),
}, {
  path: 'indicadores',
  loadChildren: () => import('./indicators/indicators.module').then(m => m.IndicatorsModule),
}, {
  path: 'vencedoras',
  loadChildren: () => import('./winners/winners.module').then(m => m.WinnersModule),
}, {
  path: '',
  redirectTo: '/inicio',
  pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
