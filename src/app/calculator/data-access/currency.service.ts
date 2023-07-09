import { Injectable } from '@angular/core';
import {
  Currency,
  OptionCurrencyValue,
} from '../../shared/interfaces/currency';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  currencyApiUrl =
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

  constructor(private http: HttpClient) {}

  getCurrencies() {
    return this.http.get<Currency[]>(this.currencyApiUrl);
  }
  getRecalculatedValues(
    currencies: OptionCurrencyValue[],
    values: number[],
    changedValueId: number,
  ) {
    const notChangedValueId = changedValueId ? 0 : 1;
    if (values[changedValueId] === null || values[notChangedValueId] === null)
      return [0, 0];

    const changedValueCurrency = currencies[changedValueId];
    const notChangedValueCurrency = currencies[notChangedValueId];

    const changedValue = Number(values[changedValueId].toFixed(0));
    const recalculatedNotChangedValue = Number(
      (
        (values[changedValueId] * changedValueCurrency.rate) /
        notChangedValueCurrency.rate
      ).toFixed(0),
    );

    return changedValueId > notChangedValueId
      ? [recalculatedNotChangedValue, changedValue]
      : [changedValue, recalculatedNotChangedValue];
  }
}
