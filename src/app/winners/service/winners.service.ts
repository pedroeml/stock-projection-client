import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { WinnerModel } from '../model/winners.model';
import { WinnersRestService } from './winners-rest.service';

@Injectable()
export class WinnersService {

  constructor(private readonly rest: WinnersRestService) { }

  public winners(): Observable<WinnerModel[]> {
    return this.rest.getWinners().pipe(
      map(response => Object.entries(response).map(([key, value]) => new WinnerModel(key, value))),
      map(winners => winners.sort((a, b) => b.dividendYield - a.dividendYield)),
    );
  }
}
