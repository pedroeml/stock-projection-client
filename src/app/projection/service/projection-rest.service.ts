import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectionRestService {

  constructor(private readonly http: HttpClient) { }

}
