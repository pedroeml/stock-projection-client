import { Component, Input, OnInit } from '@angular/core';

import { ChartType } from 'angular-google-charts';

import { Subscription } from 'rxjs';

import { StockChartService } from '../service/stock-chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: 'chart.component.html',
  styleUrls: ['chart.component.scss'],
})
export class ChartComponent implements OnInit {
  private readonly subscriptions: Subscription;
  private readonly chartType: ChartType;
  private readonly chartColumns: string[];
  private history: number[][];

  @Input()
  public ticker: string;

  constructor(private readonly service: StockChartService) {
    this.subscriptions = new Subscription();
    this.chartType = ChartType.LineChart;
    this.chartColumns = ['Data', 'Preço'];
  }

  ngOnInit() {
    this.subscriptions.add(this.load());
  }

  get type(): ChartType {
    return this.chartType;
  }

  get columns(): string[] {
    return this.chartColumns;
  }

  get data(): number[][] {
    return this.history;
  }

  private load(): Subscription {
    return this.service.stockHistory(this.ticker).subscribe(
      history => {
        this.history = history;
      }
    );
  }
}
