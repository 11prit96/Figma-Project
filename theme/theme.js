import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      dark: "#06071B",
      light: "#05013B",
      main: "#07092B",
    },
    secondary: {
      dark: "#061A2A",
      main: "#11E6C6",
      light: "#64FFE8",
    },
    text:{
      light: "#ddd",
      dark: "#333",
      extraLight: "#aaa"
    }
  },
});

theme = responsiveFontSizes(theme);

export default theme;
