import { CircularProgress, Container, Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Currency } from "@src/store/currencyType";
import { makeStyles } from "tss-react/mui";
import WifiProtectedSetupIcon from "@mui/icons-material/WifiProtectedSetup";
import { Button } from "antd";

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    padding: "3em!important",
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
  },
  preloaderContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },

  currencyGridElement: {
    border: "1px solid rgba(0, 0, 0, 0.3)",
    borderRadius: "10px",
    transition: "300ms border-color ease-out",

    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
  },

  input: {
    border: "none",
    width: "90%",
    fontSize: "2.5em",

    "&:focus": {
      border: "none",
      outline: "none",
    },
  },

  info: {
    fontStyle: "italic",
    fontSize: "0.8em",
  },

  title: {
    fontWeight: 600,
  },

  grid: {
    borderRadius: "10px",
    boxShadow: "0 7px 15px rgba(0, 0, 0, 0.2)",
    padding: "2em",
  },
}));

export const Converter = () => {
  const { classes } = useStyles();

  const currencyRates: Currency[] = useSelector((state: any) => state.currency.currencyRates);

  const [currencyTo, setCurrencyTo] = useState<Currency>(null);
  const [currencyFrom, setCurrencyFrom] = useState<Currency>(null);

  const [isLoading, setIsLoading] = useState(true);

  const [convertedAmount, setConvertedAmount] = useState(0);

  const [resultAmount, setResultAmount] = useState(0);

  const onInputCurrencyChange = (e: any) => {
    const { value } = e.target;

    console.log(value);

    setConvertedAmount(parseInt(value));
  };

  useEffect(() => {
    if (currencyFrom && currencyTo) setResultAmount((convertedAmount * currencyTo.value) / currencyFrom.value);
  }, [convertedAmount, currencyFrom, currencyTo]);

  const onCurrencyChangeFrom = (e: any) => {
    setCurrencyFrom(currencyRates.find((currency) => currency.name === e.target.value));
  };

  const onCurrencyChangeTo = (e: any) => {
    setCurrencyTo(currencyRates.find((currency) => currency.name === e.target.value));
  };

  useEffect(() => {
    if (currencyRates.length) {
      // setIsLoading(false)
      setCurrencyFrom(currencyRates[0]);
      setCurrencyTo(currencyRates[Math.floor(Math.random() * (currencyRates.length - 1 - 1)) + 1]);
    }
    console.log(currencyRates);
  }, [currencyRates]);

  const onRevertCLickHandler = () => {
    const currentFrom = currencyFrom;
    setCurrencyFrom(currencyTo);
    setCurrencyTo(currentFrom);
  };

  return (
    <Container maxWidth={"lg"} className={classes.root}>
      {currencyRates.length && currencyFrom && currencyTo ? (
        <Grid container spacing={2} className={classes.grid}>
          <Grid item md={12} lg={12}>
            Данные за {new Date(Date.now()).toString()}
          </Grid>
          <Grid container item spacing={1} lg={12}>
            <Grid item lg={5}>
              <p className={classes.title}>У меня есть</p>
              <ToggleButtonGroup value={currencyFrom.name} exclusive onChange={onCurrencyChangeFrom}>
                {currencyRates.map((currency, key) => (
                  <ToggleButton key={key} color={"primary"} value={currency.name}>
                    {currency.name}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Grid>
            <Grid item lg={2}></Grid>
            <Grid item lg={5}>
              <p className={classes.title}>Хочу приобрести</p>
              <ToggleButtonGroup value={currencyTo.name} exclusive onChange={onCurrencyChangeTo}>
                {currencyRates.map((currency, key) => (
                  <ToggleButton key={key} color={"primary"} disabled={currency === currencyFrom} value={currency.name}>
                    {currency.name}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Grid>
          </Grid>
          <Grid container item spacing={1} lg={12}>
            <Grid item lg={5} className={classes.currencyGridElement}>
              <input
                className={classes.input}
                value={convertedAmount ? convertedAmount : 0}
                onChange={onInputCurrencyChange}
                maxLength={8}
                onFocus={(event) => event.target.select()}
              />
              <p className={classes.info}>
                1{currencyFrom.name}={(currencyTo.value / currencyFrom.value).toFixed(2)}
                {currencyTo.name}
              </p>
            </Grid>
            <Grid item lg={2} alignItems={"center"} display={"flex"} justifyContent={"center"}>
              <Button
                type={"text"}
                size={"large"}
                style={{ display: "flex", alignItems: "center" }}
                onClick={onRevertCLickHandler}
              >
                <WifiProtectedSetupIcon fontSize={"large"} />
              </Button>
            </Grid>
            <Grid item lg={5} className={classes.currencyGridElement}>
              <span style={{ fontSize: "2.5em", width: "90%" }}>{resultAmount ? resultAmount.toFixed(2) : 0}</span>
              <p className={classes.info}>
                1{currencyTo.name}={(currencyFrom.value / currencyTo.value).toFixed(2)}
                {currencyFrom.name}
              </p>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <div className={classes.preloaderContainer}>
          Пытаемся получить текущий курс валют...
          <CircularProgress color={"primary"} style={{ marginTop: "1em" }} />
        </div>
      )}
    </Container>
  );
};
