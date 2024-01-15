import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";
import { MenuElement } from "@src/components/Menu/components/MenuElement";
import WifiProtectedSetupIcon from "@mui/icons-material/WifiProtectedSetup";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.primary.main,
      height: "100%",
      width: "min(40%, 300px)",
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "column",
      alignItems: "end",
      padding: "10px 0 0 10px",
    },
  };
});

interface Elem {
  isActive: boolean;
  name: string;
}

interface MenuState {
  values: Elem[];
}

export const Menu = () => {
  const menuState = (): MenuState => {
    return {
      values: [
        {
          isActive: true,
          name: "Converter",
        },
      ],
    };
  };
  const { classes } = useStyles();

  const [menuElems, setMenuElems] = useState(menuState());

  const clickHandler = (e: any) => {
    const { id } = e.target;
    console.log(e.target);
    // @ts-ignore
    // setMenuElems((prevState) => ({ ...prevState, [id]: { ...prevState[id], isActive: true } }));
    // setMenuElems((prevState) => Object.keys(prevState).forEach(key));
    setMenuElems((prevState) => ({
      ...prevState,
      values: prevState.values.map((elem) =>
        elem.name === id ? { ...elem, isActive: true } : { ...elem, isActive: false },
      ),
    }));
    console.log(id);
  };

  return (
    <div className={classes.root}>
      {/*<MenuElement*/}
      {/*  title={menuElems.test.name}*/}
      {/*  isActive={menuElems.test.isActive}*/}
      {/*  name={menuElems.test.name}*/}
      {/*  onClickHandler={(event: any) => clickHandler(event)}*/}
      {/*  icon={null}*/}
      {/*/>*/}
      {/*<MenuElement*/}
      {/*  title={menuElems.test2.name}*/}
      {/*  isActive={menuElems.test2.isActive}*/}
      {/*  name={menuElems.test2.name}*/}
      {/*  onClickHandler={(event: any) => clickHandler(event)}*/}
      {/*  icon={null}*/}
      {/*/>*/}
      {menuElems.values.map((elem, key) => (
        <MenuElement
          isActive={elem.isActive}
          icon={<WifiProtectedSetupIcon fontSize={"small"} />}
          name={elem.name}
          onClickHandler={(event: any) => clickHandler(event)}
          key={key}
        />
      ))}
    </div>
  );
};
