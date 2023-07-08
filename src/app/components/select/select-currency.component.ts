import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  OptionCurrencyValue,
  SelectOption,
} from '../../shared/interfaces/currency';

@Component({
  selector: 'app-select-currency',
  templateUrl: './select-currency.component.html',
  styleUrls: ['./select-currency.component.css'],
})
export class SelectCurrencyComponent {
  @Input() options: SelectOption[] | null = null;
  @Input() value: string = '';
  @Output() valueChanges = new EventEmitter<OptionCurrencyValue>();

  changed() {
    const chosenCurrencyOption = this.options?.find(
      (opt) => opt.value.cc === this.value,
    );
    if (chosenCurrencyOption) {
      this.valueChanges.emit(chosenCurrencyOption.value);
    }
  }
}
