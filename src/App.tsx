import React from "react";
import "./App.css";
import "reinvented-color-wheel/css/reinvented-color-wheel.min.css";
// @ts-expect-error ts-migrate(6142) FIXME: Module './ColorPicker' was resolved to '/Users/raa... Remove this comment to see the full error message
import ColorPicker from "./ColorPicker";

const isStandalone =
  window.matchMedia("(display-mode: standalone)").matches ||
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'standalone' does not exist on type 'Navi... Remove this comment to see the full error message
  window.navigator.standalone === true;

const Wrapper = ({
  children
}: any) => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="wrapper">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <h1>Iro Color Picker</h1>
      {children}
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <p>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <em>pssst. Add me as a PWA in Chrome.</em>
      </p>
    </div>
  );
};
function resize() {
  window.resizeTo(580, 200);
}
function App() {
  React.useEffect(() => {
    if (isStandalone) {
      window.addEventListener("resize", resize);
    }
    return window.removeEventListener("resize", resize);
  }, []);
  if (isStandalone) {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <ColorPicker />;
  }
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Wrapper>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ColorPicker />
    </Wrapper>
  );
}

export default App;
