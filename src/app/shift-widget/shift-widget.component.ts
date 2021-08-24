import { Component, Input, OnInit } from '@angular/core';
import { ShiftWidgetService } from './shift-widget.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-shift-widget',
  templateUrl: './shift-widget.component.html',
  styleUrls: ['./shift-widget.component.css']
})
export class ShiftWidgetComponent implements OnInit {

  @Input() roomNumber: number = 0;
  @Input() roomDesc: string = "";

  currentShift: string = "";

  constructor(private shiftWidgetService: ShiftWidgetService) { }

  ngOnInit(): void {
    this.currentShift = this.shiftWidgetService.getShiftNumber(this.roomNumber);
    
    interval(30000).subscribe(() => {
      this.currentShift = this.shiftWidgetService.getShiftNumber(this.roomNumber);
    });
  }

  
    


}
