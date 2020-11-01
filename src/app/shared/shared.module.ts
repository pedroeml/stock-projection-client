import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GoogleChartsModule } from 'angular-google-charts';

import { ChartComponent } from './components/chart/chart.component';
import { EmptyContainerComponent } from './components/empty-container/empty-container.component';
import { SearchComponent } from './components/search/search.component';
import { SearchRestService } from './services/search-rest.service';
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    ChartComponent,
    EmptyContainerComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    GoogleChartsModule,
    RouterModule,
    IonicModule,
  ],
  providers: [
    SearchService,
    SearchRestService,
  ],
  exports: [
    ChartComponent,
    EmptyContainerComponent,
    SearchComponent,
  ]
})
export class SharedModule { }
