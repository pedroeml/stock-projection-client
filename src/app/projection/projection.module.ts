import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { ApiModule } from '../api/api.module';
import { apiProvider } from '../api/provider/api.provider';
import { SharedModule } from '../shared/shared.module';
import { ProjectionContainerComponent } from './projection-container/projection-container.component';
import { ProjectionRoutingModule } from './projection-routing.module';
import { ProjectionRestService } from './service/projection-rest.service';
import { ProjectionService } from './service/projection.service';

@NgModule({
  declarations: [
    ProjectionContainerComponent,
  ],
  imports: [
    ApiModule,
    CommonModule,
    HttpClientModule,
    IonicModule,
    SharedModule,
    ProjectionRoutingModule,
  ],
  providers: [
    apiProvider,
    ProjectionService,
    ProjectionRestService,
  ],
})
export class ProjectionModule { }
