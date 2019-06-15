import React from "react";
import ReinventedColorWheel from "reinvented-color-wheel";

export default function useColorPicker(onChange) {
  const ref = React.useRef();
  const colorWheel = React.useRef();
  React.useEffect(() => {
    if (ref.current) {
      colorWheel.current = new ReinventedColorWheel({
        // appendTo is the only required property. specify the parent element of the color wheel.
        appendTo: ref.current,

        // followings are optional properties and their default values.

        // initial color (can be specified in hsv / hsl / rgb / hex)
        hex: "#000000",

        // appearance
        wheelDiameter: 200,
        wheelThickness: 20,
        handleDiameter: 16,
        wheelReflectsSaturation: false,

        // handler
        onChange
      });
    }
    const refData = ref.current;
    return () => {
      if (refData) {
        while (refData.firstChild) {
          refData.removeChild(refData.firstChild);
        }
        colorWheel.current = null;
      }
    };
  }, [onChange, ref]);
  function updateColor(hsv) {
    colorWheel.current.hsv = hsv;
    colorWheel.current.redraw();
    onChange(colorWheel.current);
  }
  return [ref, updateColor];
}
