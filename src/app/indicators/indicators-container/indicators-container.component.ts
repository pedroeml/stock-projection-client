import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { first, map, switchMap, tap } from 'rxjs/operators';

import { IndicatorsResponse } from '../integration/indicators.response';
import { IndicatorsService } from '../service/indicators.service';

@Component({
  selector: 'app-indicators-container',
  templateUrl: './indicators-container.component.html',
  styleUrls: ['./indicators-container.component.scss'],
})
export class IndicatorsContainerComponent {
  private readonly subscriptions: Subscription;
  private stockTicker: string;
  private indicatorsData: IndicatorsResponse;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: IndicatorsService) {
    this.stockTicker = '';
    this.subscriptions = new Subscription();
    this.subscriptions.add(this.load());
  }

  get isLoading(): boolean {
    return !this.indicatorsData;
  }

  get ticker(): string {
    return this.stockTicker;
  }

  get indicators(): IndicatorsResponse {
    return this.indicatorsData;
  }

  private load(): Subscription {
    return this.captureTicker().pipe(
      tap(ticker => {
        this.stockTicker = ticker;
      }),
      switchMap(ticker => this.service.indicators(ticker)),
    ).subscribe(
      indicators => {
        this.indicatorsData = indicators;
      });
  }

  private captureTicker(): Observable<string> {
    return this.route.params.pipe(
      map((params: ParamMap) => params['ticker'] || ''),
      first(ticker => ticker?.length > 0),
    );
  }
}
