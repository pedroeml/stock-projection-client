import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let req = request;

    if (!isDevMode() && request.url.startsWith('/api')) {
      req = request.clone({
        url: request.url.replace('/api', environment.stockProjectionServiceUrl),
      });
    }

    return next.handle(req);
  }
}
