import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ProjectionResponse } from '../integration/projection.response';

@Injectable()
export class ProjectionRestService {

  constructor(private readonly http: HttpClient) { }

  public getProjection(ticker: string): Observable<ProjectionResponse> {
    const params = new HttpParams().append('ticker', ticker);

    return this.http.get<ProjectionResponse>('/api/projections', { params });
  }
}
