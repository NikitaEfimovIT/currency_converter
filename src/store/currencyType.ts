export const GET_CURRENT_RATES_R = "GET_CURRENT_RATES_R";

export const GET_CURRENT_RATES_S = "GET_CURRENT_RATES_S";

export const GET_CURRENT_RATES_F = "GET_CURRENT_RATES_F";

export const GET_CURRENT_RATES_ARRAY = [GET_CURRENT_RATES_R, GET_CURRENT_RATES_S, GET_CURRENT_RATES_F];

export interface Currency {
  name: string;
  value: number;
}
export interface CurrencyState {
  currencyRates: Currency[];
  // currencyFrom: Currency;
  // currencyTo: Currency;
}

export interface GetCurrentCurrencyRates {
  type: typeof GET_CURRENT_RATES_S;
  payload: Currency[];
}
