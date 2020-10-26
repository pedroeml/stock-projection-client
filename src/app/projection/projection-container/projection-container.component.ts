import { first, map, tap, switchMap } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component } from '@angular/core';
import { ProjectionService } from '../service/projection.service';
import { ProjectionModel } from '../model/projection.model';

@Component({
  selector: 'app-projection-container',
  templateUrl: './projection-container.component.html',
  styleUrls: ['./projection-container.component.scss'],
})

export class ProjectionContainerComponent {
  private readonly subscriptions: Subscription;
  private stockTicker: string;
  private projection: ProjectionModel;
  private realPrices: Array<[Date, number]>;
  private forecastedPrices: Array<[Date, number]>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: ProjectionService) {
    this.subscriptions = new Subscription();
    this.subscriptions.add(this.load());
  }

  get isLoading(): boolean {
    return !this.projection;
  }

  get ticker(): string {
    return this.stockTicker;
  }

  get real(): Array<[Date, number]> {
    return this.realPrices;
  }

  get forecast(): Array<[Date, number]> {
    return this.forecastedPrices;
  }

  get firstDay(): Date {
    return this.projection.forecasted[0].date;
  }

  get daysAgo(): number {
    return this.projection.daysAgo;
  }

  get error(): number {
    return this.projection.meanSquaredError;
  }

  private load(): Subscription {
    return this.captureTicker().pipe(
      tap(ticker => {
        this.stockTicker = ticker;
      }),
      switchMap(ticker => this.service.priceForecast(ticker)),
    ).subscribe(
      projection => {
        this.realPrices = projection.realPrices;
        this.forecastedPrices = projection.forecastedPrices;
        this.projection = projection;
      });
  }

  private captureTicker(): Observable<string> {
    return this.route.params.pipe(
      first(),
      map((params: ParamMap) => params['ticker'] || ''),
    );
  }
}
