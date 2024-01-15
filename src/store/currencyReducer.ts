import { CurrencyState, GET_CURRENT_RATES_S } from "@src/store/currencyType";

const defaultState: CurrencyState = {
  currencyRates: [],
};
export const currencyReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case GET_CURRENT_RATES_S:
      return { ...state, currencyRates: action.payload };
    default:
      return state;
  }
};
