import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiInterceptor } from '../interceptor/api.interceptor';

export const apiProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiInterceptor,
  multi: true,
};
