import { applyMiddleware, combineReducers, createStore } from "redux";
import { currencyReducer } from "@src/store/currencyReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  currency: currencyReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
