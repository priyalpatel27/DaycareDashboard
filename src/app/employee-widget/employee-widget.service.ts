import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EmployeeStatus {
  name: string;
  working: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeWidgetService {

  constructor(private http: HttpClient) { }

  getActiveEmployees() {
    return this.http.get('/assets/employee-status.json');
  }
}
