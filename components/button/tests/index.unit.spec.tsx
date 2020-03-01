import React from "react";
import sinon from "sinon";
import faker from "faker";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Button } from "../index";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../../theme";

const sandbox = sinon.createSandbox();
const { random: { number }, lorem: { word, words } } = faker;

describe("Button Unit Tests", () => {
  afterEach(() => {
    sandbox.verifyAndRestore();
    cleanup();
  });

  it("should render", () => {
    // Arrange

    // Act
    const { container, debug } = render(
      <ThemeProvider theme={theme}>
        <Button color="primary" name={word()} />
      </ThemeProvider>
    )

    // Assert
    expect(container.querySelector("button")).toBeInTheDocument();
  });

});