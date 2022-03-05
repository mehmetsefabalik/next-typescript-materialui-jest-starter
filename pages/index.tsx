import React from "react";
import { useTheme } from "@mui/material/styles";
import { Button } from "../components/button";
import { Example } from "./example/example";

const Home = () => {
  const theme = useTheme();
  const hello = "Hello";
  return (
    <>
      <div style={{ color: theme.palette.primary.main }}>{hello}</div>
      <Button name="Click Me" color="primary" />
      <Example />
    </>
  );
};

export default Home;
