import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfig } from '@app/config/api.config';
import { CreateUser, GetCompaniesRoles } from './types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  getCompaniesRoles() {
    return this.http.get<GetCompaniesRoles>(`${ApiConfig.url(ApiConfig.endpoints.users.getCompaniesRoles)}`)
  }

  createUser(payload: CreateUser) {
    return this.http.post(`${ApiConfig.url(ApiConfig.endpoints.users.createUser)}`, payload);
  }
}
