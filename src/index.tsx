import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import App from "./view/App";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "@src/theme/AppTheme";
import { Provider } from "react-redux";
import { store } from "@src/store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <ThemeProvider theme={appTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
);

//@ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
