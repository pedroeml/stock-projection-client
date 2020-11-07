export interface AllIndicatorsResponse {
  [ticker: string]: IndicatorsResponse;
}

export interface IndicatorsResponse {
  Cotacao: number;
  Cresc5anos: number;
  DY: number;
  DivBrutPat: number;
  EVEBIT: number;
  EVEBITDA: number;
  Liq2meses: number;
  LiqCorr: number;
  MrgEbit: number;
  MrgLiq: number;
  PACL: number;
  PAtivo: number;
  PCapGiro: number;
  PEBIT: number;
  PL: number;
  PSR: number;
  PVP: number;
  PatLiq: number;
  ROE: number;
  ROIC: number;
}
