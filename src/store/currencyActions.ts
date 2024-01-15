import { Currency, GET_CURRENT_RATES_S, GetCurrentCurrencyRates } from "@src/store/currencyType";
import axios from "axios";

export const getCurrentCurrencyRates = () => async (dispatch: any) => {
  const options = {
    method: "GET",
    url: "https://exchange-rate-api1.p.rapidapi.com/latest",
    params: { base: "USD" },
    headers: {
      "X-RapidAPI-Key": "b21f9e9a66msh9a98d532ea8d3e7p15da38jsn5b738937d768",
      "X-RapidAPI-Host": "exchange-rate-api1.p.rapidapi.com",
    },
  };

  const listOfNecessaryCurrencies = ["EUR", "USD", "JPY", "RUB", "GBP"];

  const result: GetCurrentCurrencyRates = {
    type: GET_CURRENT_RATES_S,
    payload: null,
  };
  try {
    const response = await axios.request(options);
    const resultList: Currency[] = [];
    listOfNecessaryCurrencies.map((currency) =>
      resultList.push({ name: currency, value: response.data.rates[currency] }),
    );
    result.payload = resultList;
    return dispatch(result);
  } catch (error) {
    console.error(error);
  }
};
