export interface Currency {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
}
export interface OptionCurrencyValue {
  cc: string;
  rate: number;
}
export interface SelectOption {
  label: string;
  value: OptionCurrencyValue;
}
