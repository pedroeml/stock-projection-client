export interface ProjectionResponse {
  daysAgo: number;
  meanSquaredError: number;
  rootMeanSquaredError: number;
  meanAbsolutePercentageError: number;
  items: PriceProjectionResponse[];
}

export interface PriceProjectionResponse {
  ds: string;
  yhat: number;
  y?: number;
}
