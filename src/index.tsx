import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// @ts-expect-error ts-migrate(6142) FIXME: Module './App' was resolved to '/Users/raanderson/... Remove this comment to see the full error message
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";

ReactDOM.render(
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <ThemeProvider theme={theme}>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <CSSReset />

    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
serviceWorker.register();
