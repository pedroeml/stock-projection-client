import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { IndicatorsResponse } from '../integration/indicators.response';
import { AllIndicatorsResponse } from '../integration/indicators.response';
import { IndicatorsRestService } from './indicators-rest.service';

@Injectable()
export class IndicatorsService {
  constructor(private readonly rest: IndicatorsRestService) { }

  public allIndicators(): Observable<AllIndicatorsResponse> {
    return this.rest.getAllIndicators();
  }

  public indicators(ticker: string): Observable<IndicatorsResponse> {
    return this.rest.getIndicators(ticker);
  }
}
