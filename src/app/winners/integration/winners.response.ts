export interface WinnersResponse {
  [ticker: string]: WinnerIndicatorsResponse;
}

export interface WinnerIndicatorsResponse {
  DY: number;
  DivBrutPat: number;
  ROE: number;
  ROIC: number;
}
