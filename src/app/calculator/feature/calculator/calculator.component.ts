import { Component } from '@angular/core';
import { CurrencyService } from '../../data-access/currency.service';
import { map } from 'rxjs';
import {
  Currency,
  OptionCurrencyValue,
  SelectOption,
} from '../../../shared/interfaces/currency';
import { CurrencyApiService } from '../../data-access/currency.api.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [CurrencyService],
})
export class CalculatorComponent {
  currencies$ = this.currencyApi
    .getCurrencies()
    .pipe(this.getAddHryvnaMapper());
  selectCurrencyOptions$ = this.currencies$.pipe<SelectOption[]>(
    this.getCurrencyToSelectOptionsMapper(),
  );

  chosenCurrencies: OptionCurrencyValue[] = [
    { cc: '', rate: 0 },
    { cc: '', rate: 0 },
  ];
  values: number[] = [0, 0];
  changedValueId = 0;

  constructor(
    private currencyService: CurrencyService,
    private currencyApi: CurrencyApiService,
  ) {}

  private recalculateValues(changedId: number) {
    if (changedId !== this.changedValueId) {
      this.changedValueId = changedId;
    }
    this.values = this.currencyService.getRecalculatedValues(
      this.chosenCurrencies,
      this.values,
      this.changedValueId,
    );
  }

  private getAddHryvnaMapper() {
    return map((currencies: Currency[]) => [
      ...currencies,
      {
        exchangedate: currencies[0].exchangedate,
        rate: 1,
        txt: 'Гривня',
        cc: 'UAH',
        r030: 980,
      },
    ]);
  }

  private getCurrencyToSelectOptionsMapper() {
    return map((currencies: Currency[]) =>
      currencies.map(({ txt, cc, rate }) => ({
        label: txt,
        value: { cc, rate },
      })),
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
