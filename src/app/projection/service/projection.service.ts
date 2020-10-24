import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProjectionModel } from '../model/projection.model';
import { ProjectionRestService } from './projection-rest.service';

@Injectable()
export class ProjectionService {

  constructor(private readonly rest: ProjectionRestService) { }

  public priceForecast(ticker: string): Observable<ProjectionModel> {
    return this.rest.getProjection(ticker).pipe(
      map(response => new ProjectionModel(response)),
    );
  }
}
