import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { SearchRestService } from './search-rest.service';

@Injectable()
export class SearchService {

  constructor(private readonly rest: SearchRestService) {}

  public getTickers(): Observable<string[]> {
    return this.rest.getTickers();
  }
}
