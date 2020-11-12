import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { CardComponent } from './card/card.component';
import { HomeRoutingModule } from './home-routing.module';
import { WelcomeContainerComponent } from './welcome-container/welcome-container.component';

@NgModule({
  declarations: [
    CardComponent,
    WelcomeContainerComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    HomeRoutingModule,
  ],
})
export class HomeModule { }
