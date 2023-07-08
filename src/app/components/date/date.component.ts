import { Component } from '@angular/core';
import { FormatDate } from '../../shared/constants/date';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
})
export class DateComponent {
  currentDate = new Date();
  toggle = true;

  toggleFormat() {
    this.toggle = !this.toggle;
  }

  protected readonly FormatDate = FormatDate;
}
