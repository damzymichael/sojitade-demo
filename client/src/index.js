import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import "./scss/index.scss";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3101d0",
      light: "#5a34d9",
      dark: "#220192",
    },
    secondary: {
      main: "#028E37",
      light: "#0f833b",
      dark: "#028E3760",
    },
  },
  shape: {
    borderRadius: 5,
  },
  breakpoints: {
    values: {
      xs: 0,
      xs_1: 500,
      sm: 600,
      sm_1: 700,
      sm_2: 800,
      md: 900,
      md_1: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Karma",
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
