import React from "react";
import "./App.css";
import "reinvented-color-wheel/css/reinvented-color-wheel.min.css";
import ColorPicker from "./ColorPicker";

const isStandalone =
  window.matchMedia("(display-mode: standalone)").matches ||
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'standalone' does not exist on type 'Navi... Remove this comment to see the full error message
  window.navigator.standalone === true;

const Wrapper = ({ children }: any) => {
  return (
    <div className="wrapper">
      <h1>Iro Color Picker</h1>
      {children}

      <p>
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
    return <ColorPicker />;
  }
  return (
    <Wrapper>
      <ColorPicker />
    </Wrapper>
  );
}

export default App;
