import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCurrencyComponent } from './select-currency.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectCurrencyComponent],
  imports: [CommonModule, FormsModule],
  exports: [SelectCurrencyComponent],
})
export class SelectModule {}
