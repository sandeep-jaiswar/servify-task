import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/header";
import Footer from "./components/footer";
import AppContext from "./utils/AppContext";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Body from "./components/body";

function App() {
  const [state, setState] = useState({ loading: true, appData: {} });
  const { loading, appData } = state;
  useEffect(() => {
    axios
      .get(`http://${window.location.host.split(".")[0]}.localhost:8080`)
      .then((res) => {
        setState({ appData: res.data[0], loading: false });
      });
  }, []);
  if (loading) {
    return true;
  }

  const themeOptions = createTheme({
    palette: {
      type: "light",
      primary: {
        main: appData.primary,
      },
      secondary: {
        main: appData.secondary,
      },
    },
    typography: {
      fontFamily: [
        appData.font,
        "Roboto",
        "sans-serif",
      ].join(","),
    },
  });
  return (
    <AppContext.Provider value={appData}>
      <ThemeProvider theme={themeOptions}>
        <Header />
        <Body />
        <Footer />
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
