import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { AddApplication, Company } from './types';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }
  getCompanies(): Observable<Company[]> {
    return of<Company | Company[]>([
      {
        id: 1,
        name: 'Company 1',
        applications: [
          {
            id: 1,
            name: 'Application 1',
            description: 'Description 1',
            policyNumber: 'Policy Number 1'
          },
          {
            id: 2,
            name: 'Application 2',
            description: 'Description 2',
            policyNumber: 'Policy Number 2'
          }
        ]
      },
      {
        id: 2,
        name: 'Company 2',
        applications: [
          {
            id: 3,
            name: 'Application 3',
            description: 'Description 3',
            policyNumber: 'Policy Number 3'
          },
          {
            id: 4,
            name: 'Application 4',
            description: 'Description 4',
            policyNumber: 'Policy Number 4'
          }
        ]
      }
    ]).pipe(
      map((data => Array.isArray(data) ? data : [data]))
    );
  }

  addApplication(application: AddApplication): Observable<void> {
    return of();
  }
}
