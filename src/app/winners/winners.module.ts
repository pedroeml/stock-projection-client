import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { WinnersContainerComponent } from './winners-container/winners-container.component';
import { WinnersRoutingModule } from './winners-routing.module';

@NgModule({
  declarations: [
    WinnersContainerComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    WinnersRoutingModule,
  ],
})
export class WinnersModule { }
