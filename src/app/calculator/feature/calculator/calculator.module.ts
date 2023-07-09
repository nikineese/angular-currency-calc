import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DateModule } from '../date/date.module';
import { InputModule } from '../input/input.module';
import { SelectModule } from '../select/select.module';

@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    DateModule,
    InputModule,
    SelectModule,
  ],
  exports: [CalculatorComponent],
})
export class CalculatorModule {}
