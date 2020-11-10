import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { HomeRoutingModule } from './home-routing.module';
import { WelcomeContainerComponent } from './welcome-container/welcome-container.component';

@NgModule({
  declarations: [
    WelcomeContainerComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    HomeRoutingModule,
  ],
})
export class HomeModule { }
