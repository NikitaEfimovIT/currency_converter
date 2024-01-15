import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Menu } from "@src/components/Menu/Menu";
import { makeStyles } from "tss-react/mui";
import { Converter } from "@src/view/Converter/Converter";
import { useDispatch } from "react-redux";
import { getCurrentCurrencyRates } from "@src/store/currencyActions";

// const useStyles = makeStyles((theme: any)=>({
//
// }))

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: "0!important",
    height: "100%",
  },
}));

function App() {
  const { classes } = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getCurrentCurrencyRates());
  }, []);

  return (
    <Container maxWidth={false} className={classes.root}>
      <Menu />
      <Converter />
    </Container>
  );
}

export default App;
