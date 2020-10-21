import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { ApiModule } from '../api/api.module';
import { apiProvider } from '../api/provider/api.provider';
import { SharedModule } from '../shared/shared.module';
import { ChartContainerComponent } from './chart-container/chart-container.component';
import { StockChartRestService } from './service/stock-chart-rest.service';
import { StockChartService } from './service/stock-chart.service';
import { StockChartRoutingModule } from './stock-chart-routing.module';

@NgModule({
  declarations: [
    ChartContainerComponent,
  ],
  imports: [
    ApiModule,
    CommonModule,
    HttpClientModule,
    IonicModule,
    SharedModule,
    StockChartRoutingModule,
  ],
  providers: [
    apiProvider,
    StockChartService,
    StockChartRestService,
  ],
})
export class StockChartModule { }
