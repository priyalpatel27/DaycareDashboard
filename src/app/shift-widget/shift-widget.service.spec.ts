import { TestBed } from '@angular/core/testing';

import { ShiftWidgetService } from './shift-widget.service';

describe('ShiftWidgetService', () => {
  let service: ShiftWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShiftWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
