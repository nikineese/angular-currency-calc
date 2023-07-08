import { Component } from '@angular/core';
import { CurrencyService } from '../../services/currency/currency.service';
import { LoggerService } from '../../services/logger';
import { map } from 'rxjs';
import {
  OptionCurrencyValue,
  SelectOption,
} from '../../shared/interfaces/currency';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [CurrencyService, LoggerService],
})
export class CalculatorComponent {
  currencies$ = this.currency.getCurrencies().pipe(
    map((currencies) => [
      ...currencies,
      {
        exchangedate: currencies[0].exchangedate,
        rate: 1,
        txt: 'Гривня',
        cc: 'UAH',
        r030: 980,
      },
    ]),
  );
  selectCurrencyOptions$ = this.currencies$.pipe<SelectOption[]>(
    map((currencies) =>
      currencies.map((curr) => ({
        label: curr.txt,
        value: { cc: curr.cc, rate: curr.rate },
      })),
    ),
  );

  chosenCurrencies: OptionCurrencyValue[] = [
    { cc: '', rate: 0 },
    { cc: '', rate: 0 },
  ];
  values: number[] = [0, 0];
  changedValueId = 0;

  constructor(private currency: CurrencyService) {}

  private recalculateValues(changedId: number) {
    if (changedId !== this.changedValueId) {
      this.changedValueId = changedId;
    }
    this.values = this.currency.getRecalculatedValues(
      this.chosenCurrencies,
      this.values,
      this.changedValueId,
    );
  }

  currencyChanges(v: OptionCurrencyValue, id: number) {
    this.chosenCurrencies[id] = v;
    this.recalculateValues(id);
  }
  valuesChanges(v: number, id: number) {
    this.values[id] = v;
    this.recalculateValues(id);
  }
}
