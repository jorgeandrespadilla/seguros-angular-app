import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfig } from '@app/config/api.config';
import { map, Observable } from 'rxjs';
import { AddApplication, ApplicationDetail, Company, GetCompanies } from './types';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(
    private http: HttpClient,
  ) { }
  getCompanies(request: GetCompanies): Observable<Company[]> {
    return this.http.get<Company | Company[]>(ApiConfig.url(ApiConfig.endpoints.applications.companies), {
      params: new HttpParams()
        .set('fechaInicio', request.fechaInicio.toISOString())
        .set('fechaFin', request.fechaFin.toISOString())
    }).pipe(
      map((data => Array.isArray(data) ? data : [data]))
    );
  }

  addApplication(application: AddApplication) {
    return this.http.post(ApiConfig.url(ApiConfig.endpoints.applications.addApplication), application, {
      observe: 'response',
    });
  }

  getApplication(id: number) {
    return this.http.get<ApplicationDetail>(ApiConfig.url(ApiConfig.endpoints.applications.getApplication.replace('{id}', id.toString())));
  }
}
