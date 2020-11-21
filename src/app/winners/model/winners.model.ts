import { WinnerIndicatorsResponse } from '../integration/winners.response';

export class WinnerModel {
  public readonly ticker: string;
  public readonly dividendYield: number;
  public readonly divBrutPat: number;
  public readonly roe: number;
  public readonly roic: number;

  constructor(ticker: string, response: WinnerIndicatorsResponse) {
    this.ticker = ticker;
    this.dividendYield = response.DY;
    this.divBrutPat = response.DivBrutPat;
    this.roe = response.ROE;
    this.roic = response.ROIC;
  }
}
