import React from "react";
import sinon, { SinonStub } from "sinon";
import faker from "faker";
import { render, cleanup } from "@testing-library/react";
import { Button } from "../index";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../../theme";
import MuiButton from "@material-ui/core/Button";

const sandbox = sinon.createSandbox();
const {
  lorem: { word },
} = faker;

describe("Button Unit Tests", () => {
  afterEach(() => {
    sandbox.verifyAndRestore();
    cleanup();
  });

  it("should render", () => {
    // Arrange
    sandbox.spy(React, "createElement");

    // Act
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button color="primary" name={word()} />
      </ThemeProvider>
    );

    // Assert
    expect(container.querySelector("button")).toBeInTheDocument();
    expect((React.createElement as SinonStub).calledWith(MuiButton)).toBe(true);
  });
});
