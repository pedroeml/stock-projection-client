export interface ProjectionResponse {
  daysAgo: number;
  meanSquaredError: number;
  items: PriceProjectionResponse[];
}

export interface PriceProjectionResponse {
  ds: string;
  yhat: number;
  y?: number;
}
