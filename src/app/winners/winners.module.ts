import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { ApiModule } from '../api/api.module';
import { apiProvider } from '../api/provider/api.provider';
import { WinnersRestService } from './service/winners-rest.service';
import { WinnersService } from './service/winners.service';
import { WinnersContainerComponent } from './winners-container/winners-container.component';
import { WinnersRoutingModule } from './winners-routing.module';

@NgModule({
  declarations: [
    WinnersContainerComponent,
  ],
  imports: [
    ApiModule,
    CommonModule,
    IonicModule,
    WinnersRoutingModule,
  ],
  providers: [
    apiProvider,
    WinnersRestService,
    WinnersService,
  ],
})
export class WinnersModule { }
