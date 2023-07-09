import { Component } from '@angular/core';
import { FormatDate } from '../../../shared/constants/date';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
})
export class DateComponent {
  currentDate = new Date();
  protected readonly FormatDate = FormatDate;
}
