import { Component, Input, OnInit } from '@angular/core';

import { ChartType, getPackageForChart, ScriptLoaderService } from 'angular-google-charts';

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
  private readonly chartPackage: string;
  private history: Array<[Date, number]>;
  private stockFormatters;

  @Input()
  public ticker: string;

  constructor(
    private readonly loaderService: ScriptLoaderService,
    private readonly service: StockChartService) {
    this.subscriptions = new Subscription();
    this.chartType = ChartType.LineChart;
    this.chartPackage = getPackageForChart(this.chartType);
    this.chartColumns = ['Data', 'Preço'];
  }

  ngOnInit() {
    this.subscriptions.add(this.load());
    this.subscriptions.add(this.loadFormatter());
  }

  get type(): ChartType {
    return this.chartType;
  }

  get columns(): string[] {
    return this.chartColumns;
  }

  get data(): Array<[Date, number]> {
    return this.history;
  }

  get formatters() {
    return this.stockFormatters;
  }

  private load(): Subscription {
    return this.service.stockHistory(this.ticker).subscribe(
      history => {
        this.history = history;
      }
    );
  }

  private loadFormatter(): Subscription {
    return this.loaderService.loadChartPackages(this.chartPackage).subscribe(() => {
      this.stockFormatters = [{
        formatter: new google.visualization.DateFormat({ pattern: 'dd/MM/yyyy' }),
        colIndex: 0,
      }, {
        formatter: new google.visualization.NumberFormat({
          decimalSymbol: ',',
          groupingSymbol: '.',
          prefix: 'R$ '
        }),
        colIndex: 1,
      }];
    });
  }
}
