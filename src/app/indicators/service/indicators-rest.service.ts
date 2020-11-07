import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AllIndicatorsResponse, IndicatorsResponse } from '../integration/indicators.response';

@Injectable()
export class IndicatorsRestService {

  constructor(private readonly http: HttpClient) { }

  public getAllIndicators(): Observable<AllIndicatorsResponse> {
    return this.http.get<AllIndicatorsResponse>('/api/indicators');
  }

  public getIndicators(ticker: string): Observable<IndicatorsResponse> {
    const params = new HttpParams().append('ticker', ticker);

    return this.http.get<IndicatorsResponse>('/api/indicators', { params });
  }
}
