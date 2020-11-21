import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { WinnersResponse } from '../integration/winners.response';

@Injectable()
export class WinnersRestService {
  constructor(private readonly http: HttpClient) { }

  public getWinners(): Observable<WinnersResponse> {
    return this.http.get<WinnersResponse>('/api/winners');
  }
}
