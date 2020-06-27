import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { apiProvider } from './provider/api.provider';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    apiProvider,
  ],
})
export class ApiModule { }
