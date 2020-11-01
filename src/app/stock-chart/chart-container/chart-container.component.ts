import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { first, map, switchMap, tap } from 'rxjs/operators';

import { StockChartService } from '../service/stock-chart.service';

@Component({
  selector: 'app-chart-container',
  templateUrl: 'chart-container.component.html',
  styleUrls: ['chart-container.component.scss'],
})
export class ChartContainerComponent {
  private readonly subscriptions: Subscription;
  private stockTicker: string;
  private history: Array<[Date, number]>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: StockChartService) {
    this.subscriptions = new Subscription();
    this.subscriptions.add(this.load());
  }

  get ticker(): string {
    return this.stockTicker;
  }

  get stockHistory(): Array<[Date, number]> {
    return this.history;
  }

  private load(): Subscription {
    return this.captureTicker().pipe(
      tap(ticker => {
        this.stockTicker = ticker;
      }),
      switchMap(ticker => this.service.stockHistory(ticker)),
    ).subscribe(
      history => {
        this.history = history;
      });
  }

  private captureTicker(): Observable<string> {
    return this.route.params.pipe(
      map((params: ParamMap) => params['ticker'] || ''),
      first(ticker => ticker?.length > 0),
    );
  }
}
