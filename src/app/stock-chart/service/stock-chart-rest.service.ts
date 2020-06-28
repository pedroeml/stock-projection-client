import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class StockChartRestService {

  constructor(private readonly http: HttpClient) { }

  public getStockHistory(ticker: string): Observable<number[][]> {
    const params = new HttpParams().append('ticker', ticker);

    return this.http.get<number[][]>('/api/prices', { params });
  }
}
