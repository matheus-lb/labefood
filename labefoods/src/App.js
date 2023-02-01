import React from "react";
import { ThemeProvider } from "@mui/material";
import Router from "./Routers/router";
import labeTheme from './Constants/theme'

function App() {
  return (
    <ThemeProvider theme={labeTheme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
