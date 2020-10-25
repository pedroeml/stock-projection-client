import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ChartType, getPackageForChart, ScriptLoaderService } from 'angular-google-charts';

import { Subscription } from 'rxjs';

import { TimeSliceEnum } from '../../enums/time-slice.enum';

@Component({
  selector: 'app-chart',
  templateUrl: 'chart.component.html',
  styleUrls: ['chart.component.scss'],
})
export class ChartComponent implements OnChanges {
  public currentTimeSlice: TimeSliceEnum;
  public data: Array<[Date, number]> | Array<[Date, number, number]>;
  public readonly timeSlices = TimeSliceEnum;
  public readonly options: any;
  private readonly subscriptions: Subscription;
  private readonly chartType: ChartType;
  private readonly chartPackage: string;
  private readonly fiveDaysAgo: Date;
  private readonly oneMonthAgo: Date;
  private readonly threeMonthsAgo: Date;
  private readonly sixMonthsAgo: Date;
  private readonly firstDayOfTheYear: Date;
  private readonly oneYearAgo: Date;
  private readonly threeYearsAgo: Date;
  private chartColumns: string[];
  private filteredHistory: Array<[Date, number]>;
  private stockFormatters;

  @Input()
  public ticker: string;

  @Input()
  public history: Array<[Date, number]>;

  @Input()
  public forecast: Array<[Date, number]>;

  constructor(private readonly loaderService: ScriptLoaderService) {
    this.subscriptions = new Subscription();
    this.chartType = ChartType.LineChart;
    this.chartPackage = getPackageForChart(this.chartType);
    this.currentTimeSlice = TimeSliceEnum.MAX;
    this.options = this.createOptions();
    this.fiveDaysAgo = this.subtractDate(5);
    this.oneMonthAgo = this.subtractDate(0, 1);
    this.threeMonthsAgo = this.subtractDate(0, 3);
    this.sixMonthsAgo = this.subtractDate(0, 6);
    this.firstDayOfTheYear = new Date(new Date().getFullYear(), 0, 1);
    this.oneYearAgo = this.subtractDate(0, 0, 1);
    this.threeYearsAgo = this.subtractDate(0, 0, 3);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      const hasHistory = changes.history && changes.history.previousValue === undefined && changes.history.currentValue !== undefined;
      const hasForecast = changes.forecast && changes.forecast.previousValue === undefined && changes.forecast.currentValue !== undefined;

      console.log(`${hasHistory} || ${hasForecast} === ${hasHistory || hasForecast}`);

      if (hasHistory || hasForecast) {
        this.chartColumns = this.forecast ? ['Data', 'Preço', 'Projeção'] : ['Data', 'Preço'];
        this.subscriptions.add(this.loadFormatter());
        this.updateData();
      }
    }
  }

  get isLoading(): boolean {
    return !this.data || !this.stockFormatters;
  }

  get type(): ChartType {
    return this.chartType;
  }

  get columns(): string[] {
    return this.chartColumns;
  }

  get formatters() {
    return this.stockFormatters;
  }

  public isButtonEnabled(timeSlice: TimeSliceEnum): boolean {
    const firstDay: Date = this.history && this.history[0] ? this.history[0][0] : undefined;
    let isEnabled = false;

    if (!this.isLoading && firstDay !== undefined) {
      switch (timeSlice) {
        case TimeSliceEnum.THREE_YEARS:
          isEnabled = this.isDateBefore(firstDay, this.threeYearsAgo);
          break;
        case TimeSliceEnum.ONE_YEAR:
          isEnabled = this.isDateBefore(firstDay, this.oneYearAgo);
          break;
        case TimeSliceEnum.YTD:
          isEnabled = this.isDateBefore(firstDay, this.firstDayOfTheYear);
          break;
        case TimeSliceEnum.SIX_MONTHS:
          isEnabled = this.isDateBefore(firstDay, this.sixMonthsAgo);
          break;
        case TimeSliceEnum.THREE_MONTHS:
          isEnabled = this.isDateBefore(firstDay, this.threeMonthsAgo);
          break;
        case TimeSliceEnum.ONE_MONTH:
          isEnabled = this.isDateBefore(firstDay, this.oneMonthAgo);
          break;
        case TimeSliceEnum.FIVE_DAYS:
          isEnabled = this.isDateBefore(firstDay, this.fiveDaysAgo);
          break;
        default:
          isEnabled = true;
          break;
      }
    }

    return isEnabled;
  }

  public setFilter(timeSlice: TimeSliceEnum): void {
    this.currentTimeSlice = timeSlice;

    switch (timeSlice) {
      case TimeSliceEnum.THREE_YEARS:
        this.filteredHistory = this.filterHistory(this.threeYearsAgo);
        break;
      case TimeSliceEnum.ONE_YEAR:
        this.filteredHistory = this.filterHistory(this.oneYearAgo);
        break;
      case TimeSliceEnum.YTD:
        this.filteredHistory = this.filterHistory(this.firstDayOfTheYear);
        break;
      case TimeSliceEnum.SIX_MONTHS:
        this.filteredHistory = this.filterHistory(this.sixMonthsAgo);
        break;
      case TimeSliceEnum.THREE_MONTHS:
        this.filteredHistory = this.filterHistory(this.threeMonthsAgo);
        break;
      case TimeSliceEnum.ONE_MONTH:
        this.filteredHistory = this.filterHistory(this.oneMonthAgo);
        break;
      case TimeSliceEnum.FIVE_DAYS:
        this.filteredHistory = this.filterHistory(this.fiveDaysAgo);
        break;
      default:
        this.filteredHistory = null;
        break;
    }

    this.updateData();
  }

  private isDateBefore(dateA, dateB): boolean {
    return dateA <= dateB;
  }

  private filterHistory(fromDate: Date): Array<[Date, number]>{
    const i = this.history.findIndex(([d, ]) => d >= fromDate);
    return this.history.slice(i - 1);
  }

  private subtractDate(days: number = 0, months: number = 0, years: number = 0): Date {
    const d = new Date();

    if (years) {
      d.setFullYear(d.getFullYear() - years);
    }

    if (months) {
      d.setMonth(d.getMonth() - months);
    }

    if (days) {
      d.setDate(d.getDate() - days);
    }

    return d;
  }

  private loadFormatter(): Subscription {
    return this.loaderService.loadChartPackages(this.chartPackage).subscribe(() => {
      this.stockFormatters = this.chartColumns.map((colName, i) => ({
        formatter: colName === 'Data'
          ? new google.visualization.DateFormat({ pattern: 'dd/MM/yyyy' })
          : new google.visualization.NumberFormat({
            decimalSymbol: ',',
            groupingSymbol: '.',
            prefix: 'R$ '
          }),
        colIndex: i,
      }));
    });
  }

  private updateData(): void {
    const data: Array<[Date, number]> = this.filteredHistory ?? this.history;

    if (this.forecast?.length) {
      console.log('forecast data');
      const historicData: Array<[Date, number, number]> = data.map(([date, price]) => [date, price, null]);
      const forecastData: Array<[Date, number, number]> = this.forecast.map(([date, price]) => [date, null, price]);
      const [lastRealDate, lastRealPrice] = data[data.length - 1];
      this.data = historicData
        .concat([[lastRealDate, null, lastRealPrice]])
        .concat(forecastData);
    } else {
      console.log('original data');
      this.data = data;
    }
  }

  private createOptions(): any {
    return {
      vAxis: {
        title: 'Preço',
        format: 'R$ #.###',
      },
      hAxis: {
        title: 'Data',
        format: 'MM/yyyy',
      },
      animation: {
        duration: 1800,
        startup: true,
        easing: 'out',
      },
      series: {
        1: {
          lineDashStyle: [4, 4],
          color: '#1c91c0',
        },
      },
    };
  }
}
