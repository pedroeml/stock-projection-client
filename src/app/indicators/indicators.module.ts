import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { ApiModule } from '../api/api.module';
import { apiProvider } from '../api/provider/api.provider';
import { SharedModule } from '../shared/shared.module';
import { IndicatorComponent } from './indicator/indicator.component';
import { IndicatorsContainerComponent } from './indicators-container/indicators-container.component';
import { IndicatorsRoutingModule } from './indicators-routing.module';
import { IndicatorsRestService } from './service/indicators-rest.service';
import { IndicatorsService } from './service/indicators.service';

@NgModule({
  declarations: [
    IndicatorComponent,
    IndicatorsContainerComponent,
  ],
  imports: [
    ApiModule,
    CommonModule,
    HttpClientModule,
    IonicModule,
    SharedModule,
    IndicatorsRoutingModule,
  ],
  providers: [
    apiProvider,
    IndicatorsService,
    IndicatorsRestService,
  ]
})
export class IndicatorsModule { }
