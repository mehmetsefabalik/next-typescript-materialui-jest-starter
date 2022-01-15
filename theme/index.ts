import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#DE6A0A",
    },
    secondary: {
      main: "#0BDE7D",
    },
    background: {
      default: "#fff",
    },
  },
});

export { theme };
