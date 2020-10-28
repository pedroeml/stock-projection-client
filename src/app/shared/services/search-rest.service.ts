import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class SearchRestService {

  constructor(private readonly http: HttpClient) { }

  public getTickers(): Observable<string[]> {
    return this.http.get<string[]>('/api/tickers');
  }
}
