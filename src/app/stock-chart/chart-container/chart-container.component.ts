import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-chart-container',
  templateUrl: 'chart-container.component.html',
  styleUrls: ['chart-container.component.scss'],
})
export class ChartContainerComponent {
  private readonly subscriptions: Subscription;
  private stockTicker: string;

  constructor(private readonly route: ActivatedRoute) {
    this.subscriptions = new Subscription();
    this.subscriptions.add(this.load());
  }

  get ticker(): string {
    return this.stockTicker;
  }

  private load(): Subscription {
    return this.captureTicker().subscribe(
      ticker => {
        this.stockTicker = ticker;
      });
  }

  private captureTicker(): Observable<string> {
    return this.route.params.pipe(
      first(),
      map((params: ParamMap) => params['ticker'] || ''),
    );
  }
}
