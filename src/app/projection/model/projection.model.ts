import { PriceProjectionResponse, ProjectionResponse } from '../integration/projection.response';

export class ProjectionModel {
  public readonly daysAgo: number;
  public readonly meanSquaredError: number;
  public readonly rootMeanSquaredError: number;
  public readonly meanAbsolutePercentageError: number;
  public readonly forecasted: PriceProjectionModel[];
  public readonly firstDay: Date;

  constructor(response: ProjectionResponse) {
    this.daysAgo = response.daysAgo;
    this.meanSquaredError = response.meanSquaredError;
    this.rootMeanSquaredError = response.rootMeanSquaredError;
    this.meanAbsolutePercentageError = response.meanAbsolutePercentageError;
    this.forecasted = response.items.map(forecasted => new PriceProjectionModel(forecasted));
    this.firstDay = this.calcFirstDay();
  }

  get realPrices(): Array<[Date, number]> {
    return this.forecasted
      .filter(forecasted => forecasted.real)
      .map(forecasted => [forecasted.date, forecasted.real]);
  }

  get forecastedPrices(): Array<[Date, number]> {
    return this.forecasted
      .filter(forecasted => !forecasted.real)
      .map(forecasted => [forecasted.date, forecasted.forecasted]);
  }

  private calcFirstDay(): Date {
    let lastDay: Date;

    for (const projection of this.forecasted) {
      if (projection.real) {
        lastDay = projection.date;
      } else {
        break;
      }
    }

    const firstDay = new Date(lastDay);
    firstDay.setDate(firstDay.getDate() - this.daysAgo);

    return firstDay;
  }
}

export class PriceProjectionModel {
  public readonly date: Date;
  public readonly forecasted: number;
  public readonly real?: number;

  constructor(response: PriceProjectionResponse) {
    this.date = new Date(response.ds + 'T00:00:00');
    this.forecasted = response.yhat;
    this.real = response.y;
  }
}
