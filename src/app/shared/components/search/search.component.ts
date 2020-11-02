import { Component, Input } from '@angular/core';

import { of, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public displayTickers: boolean;
  private readonly allTickers: string[];
  private readonly subscriptions: Subscription;
  private inputValue: string;
  private filteredTickers: string[];

  @Input()
  public baseHref: string;

  @Input()
  public ticker: string;

  constructor(private readonly service: SearchService) {
    this.allTickers = [];
    this.displayTickers = false;
    this.inputValue = '';
    this.ticker = '';
    this.baseHref = '..';
    this.subscriptions = new Subscription();
    this.subscriptions.add(this.load());
  }

  get tickers(): string[] {
    return this.filteredTickers ?? this.allTickers;
  }

  public hideTickers(delayTime: number = 0): void {
    if (delayTime > 0) {
      this.subscriptions.add(
        of(false).pipe(delay(delayTime)).subscribe(
          value => {
            this.displayTickers = value;
          }
        ));
    } else {
      this.displayTickers = false;
    }
  }

  public showTickers(): void {
    this.displayTickers = this.inputValue?.length > 1;
  }

  public filterTickers(event: CustomEvent): void {
    const value: string = (event?.detail?.value ?? '').toUpperCase();
    this.filteredTickers = value.length > 1
      ? this.allTickers.filter(ticker => ticker.startsWith(value))
      : null;
    this.inputValue = value;
    this.showTickers();
  }

  private load(): Subscription {
    return this.service.getTickers().subscribe(
      tickers => {
        this.allTickers.push(...tickers);
      },
    );
  }
}
