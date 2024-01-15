import React from "react";
import { makeStyles } from "tss-react/mui";
import { Box } from "@mui/material";

const useStyles = makeStyles()((theme) => ({
  rootIsActive: {
    backgroundColor: "white",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    border: "1px solid transparent",
    color: theme.palette.secondary.main,
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "1em",

    // "&::after": {
    //   content: '""',
    //   color: "red",
    // },
    // "&::before": {
    //   content: '""',
    //   color: "red",
    //   width: "10px",
    //   height: "10px",
    //   position: "absolute",
    //   right: "-20%",
    //   boxShadow: "0 25px 0 0",
    //   zIndex: "-1",
    // },
  },
  root: {
    backgroundColor: "inherit",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    border: "1px solid transparent",
    color: theme.palette.primary.contrastText,
    // "&:active": {
    //   backgroundColor: "white",
    // },
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "1em",
  },

  text: {
    fontSize: 20,
    paddingLeft: 10,
    marginBlockStart: 10,
    marginBlockEnd: 10,
  },
}));
export const MenuElement: React.FC<{
  isActive: boolean;
  icon: any;
  name: string;
  onClickHandler: any;
}> = ({ name, isActive, icon, onClickHandler }) => {
  const { classes } = useStyles();
  return (
    <section className={isActive ? classes.rootIsActive : classes.root} id={name} onClick={onClickHandler}>
      {icon ? icon : null}
      <p className={classes.text} id={name}>
        {name}
      </p>
    </section>
  );
};
