import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { GoogleChartsModule } from 'angular-google-charts';

import { ApiModule } from '../api/api.module';
import { apiProvider } from '../api/provider/api.provider';
import { ChartContainerComponent } from './chart-container/chart-container.component';
import { ChartComponent } from './chart/chart.component';
import { StockChartRestService } from './service/stock-chart-rest.service';
import { StockChartService } from './service/stock-chart.service';
import { StockChartRoutingModule } from './stock-chart-routing.module';

@NgModule({
  declarations: [
    ChartComponent,
    ChartContainerComponent,
  ],
  imports: [
    ApiModule,
    CommonModule,
    GoogleChartsModule,
    HttpClientModule,
    StockChartRoutingModule,
  ],
  providers: [
    apiProvider,
    StockChartService,
    StockChartRestService,
  ],
})
export class StockChartModule { }
