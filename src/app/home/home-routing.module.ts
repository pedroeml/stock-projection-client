import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeContainerComponent } from './welcome-container/welcome-container.component';

const routes: Routes = [{
  path: '',
  component: WelcomeContainerComponent,
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class HomeRoutingModule { }
