import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WinnersContainerComponent } from './winners-container/winners-container.component';

const routes: Routes = [{
  path: '',
  component: WinnersContainerComponent,
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class WinnersRoutingModule { }
