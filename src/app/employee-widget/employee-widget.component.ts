import { Component, OnInit } from '@angular/core';
import { EmployeeWidgetService, EmployeeStatus } from './employee-widget.service';

import { interval } from 'rxjs';

@Component({
  selector: 'app-employee-widget',
  templateUrl: './employee-widget.component.html',
  styleUrls: ['./employee-widget.component.css']
})
export class EmployeeWidgetComponent implements OnInit {
  employeeStatus: EmployeeStatus[] = [];
  activeEmployees: EmployeeStatus[] = [];

  constructor(private employeeWidgetService: EmployeeWidgetService) { }

  ngOnInit(): void {
    this.refreshEmployeeList();
    
    interval(30000).subscribe(() => {
      this.refreshEmployeeList();
    });
  }

  refreshEmployeeList() {
    this.employeeWidgetService.getActiveEmployees().subscribe(
      (resp: any) => {
        this.employeeStatus = resp["staff"];
        this.getActiveEmployees();
      },
      err => {
        console.error('Could not load active employee data');
        this.employeeStatus = [];
        this.getActiveEmployees();
      }
    );
  }

  getActiveEmployees() {
    this.activeEmployees = this.employeeStatus.filter(elem => elem.working)
  }

}
