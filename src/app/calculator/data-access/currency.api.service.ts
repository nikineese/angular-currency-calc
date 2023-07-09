import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from '../../shared/interfaces/currency';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyApiService {
  currencyApiUrl =
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

  constructor(private http: HttpClient) {}

  getCurrencies() {
    return this.http.get<Currency[]>(this.currencyApiUrl).pipe(shareReplay(1));
  }
}
