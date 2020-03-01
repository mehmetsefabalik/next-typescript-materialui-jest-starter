import React, { FunctionComponent } from "react";
import MuiButton from "@material-ui/core/Button"
import { useTheme } from "@material-ui/core";

interface IProps {
  color: "primary" | "secondary";
  name: string;
};

const Button: FunctionComponent<IProps> = ({ color, name }) => {
  return <>
    <MuiButton color={color} variant="contained">{name}</MuiButton>
  </>;
};
export { Button };