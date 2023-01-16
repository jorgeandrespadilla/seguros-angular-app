import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfig } from '@app/config/api.config';
import { map, Observable } from 'rxjs';
import { AddApplication, Company } from './types';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(
    private http: HttpClient,
  ) { }
  getCompanies(): Observable<Company[]> {
    return this.http.get<Company | Company[]>(ApiConfig.url(ApiConfig.endpoints.applications.companies)).pipe(
      map((data => Array.isArray(data) ? data : [data]))
    );
  }

  addApplication(application: AddApplication) {
    return this.http.post(ApiConfig.url(ApiConfig.endpoints.applications.addApplication), application, {
      observe: 'response',
    });
  }
}
