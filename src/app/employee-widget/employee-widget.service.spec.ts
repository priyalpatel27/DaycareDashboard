import { TestBed } from '@angular/core/testing';

import { EmployeeWidgetService } from './employee-widget.service';

describe('EmployeeWidgetService', () => {
  let service: EmployeeWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
