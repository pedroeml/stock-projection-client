import { PriceProjectionResponse, ProjectionResponse } from '../integration/projection.response';

export class ProjectionModel {
  public readonly daysAgo: number;
  public readonly meanSquaredError: number;
  public readonly forecasted: PriceProjectionModel[];

  constructor(response: ProjectionResponse) {
    this.daysAgo = response.daysAgo;
    this.meanSquaredError = response.meanSquaredError;
    this.forecasted = response.items.map(forecasted => new PriceProjectionModel(forecasted));
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
