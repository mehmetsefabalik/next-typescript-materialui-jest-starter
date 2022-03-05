import React, { FunctionComponent } from "react";
import MuiButton from "@mui/material/Button";
import style from "./style.module.scss";

interface Props {
  color: "primary" | "secondary";
  name: string;
}

const Button: FunctionComponent<Props> = ({ color, name }) => {
  return (
    <>
      <MuiButton color={color} variant="contained">
        {name}
      </MuiButton>
      <div className={style.text}>pink text</div>
    </>
  );
};
export { Button };
