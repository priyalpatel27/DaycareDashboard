import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftWidgetComponent } from './shift-widget.component';

describe('ShiftWidgetComponent', () => {
  let component: ShiftWidgetComponent;
  let fixture: ComponentFixture<ShiftWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
