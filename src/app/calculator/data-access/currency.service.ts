import { Injectable } from '@angular/core';
import { OptionCurrencyValue } from '../../shared/interfaces/currency';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
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
