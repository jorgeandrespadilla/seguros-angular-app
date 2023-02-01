import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiConfig } from '@app/config/api.config';
import { AddApplication, ApplicationDetail, Company, GetCompaniesRequest } from './types';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(
    private http: HttpClient,
  ) { }
  getCompanies(request: GetCompaniesRequest): Observable<Company[]> {
    let params = new HttpParams();
    if (request.fechaInicio) {
      params = params.set('fechaInicio', request.fechaInicio.toISOString());
    }
    if (request.fechaFin) {
      params = params.set('fechaFin', request.fechaFin.toISOString());
    }
    return this.http.get<Company | Company[]>(`${ApiConfig.url(ApiConfig.endpoints.applications.companies)}?${params}`).pipe(
      map((data => Array.isArray(data) ? data : [data]))
    );
  }

  addApplication(application: AddApplication) {
    return this.http.post(ApiConfig.url(ApiConfig.endpoints.applications.addApplication), application, {
      observe: 'response',
    });
  }

  getApplication(id: number) {
    return this.http.post<ApplicationDetail>(`${ApiConfig.url(ApiConfig.endpoints.applications.getApplication)}?id=${id}`, null);
  }
}
