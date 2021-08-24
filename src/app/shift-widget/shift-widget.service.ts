import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ShiftWidgetService {

  constructor() { }

  getShiftNumber(room: number): string {

    const currentDate = moment(new Date());
    const refDate = moment([2021, 8, 16]);

    if (currentDate.hour() < 7 || currentDate.hour() > 17 || (currentDate.hour() === 17 && currentDate.minute() >= 30)) {
      return "CLOSED";
    }

    const elapsedDays = currentDate.diff(refDate, 'days');

    if (room === 1) {
      if (elapsedDays % 2 === 0) {
        return "A";
      } else {
        return "B";
      }
    } else if (room === 2) {
      if (elapsedDays % 2 === 0) {
        if (currentDate.hour() < 12) {
          return "A";
        } else {
          return "B";
        }
      } else {
        if (currentDate.hour() < 12) {
          return "C";
        } else {
          return "D";
        }
      }        
    } else {
      return "";
    }
  }
}
