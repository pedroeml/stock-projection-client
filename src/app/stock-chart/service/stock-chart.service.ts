import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StockChartRestService } from './stock-chart-rest.service';

@Injectable()
export class StockChartService {

  constructor(private readonly rest: StockChartRestService) { }

  public stockHistory(ticker: string): Observable<Array<[Date, number]>> {
    return this.rest.getStockHistory(ticker).pipe(
      map(history => history.map(stock => [
        new Date(stock[0] + 'T00:00:00'),
        stock[1],
      ])),
    );
  }
}
