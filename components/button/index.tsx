import React, { FunctionComponent } from "react";
import MuiButton from "@material-ui/core/Button";

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
    </>
  );
};
export { Button };
