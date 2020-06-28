import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { StockChartRestService } from './stock-chart-rest.service';

@Injectable()
export class StockChartService {

  constructor(private readonly rest: StockChartRestService) { }

  public stockHistory(ticker: string): Observable<number[][]> {
    return this.rest.getStockHistory(ticker);
  }
}
