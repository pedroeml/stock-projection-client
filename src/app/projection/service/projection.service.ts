import { Injectable } from '@angular/core';

import { ProjectionRestService } from './projection-rest.service';

@Injectable()
export class ProjectionService {

  constructor(private readonly rest: ProjectionRestService) { }

}
