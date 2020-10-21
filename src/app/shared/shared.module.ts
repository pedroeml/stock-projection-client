import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { GoogleChartsModule } from 'angular-google-charts';

import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    ChartComponent,
  ],
  imports: [
    CommonModule,
    GoogleChartsModule,
    IonicModule,
  ],
  exports: [
    ChartComponent,
  ]
})
export class SharedModule { }
