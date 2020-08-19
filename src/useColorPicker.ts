import React from "react";
import ReinventedColorWheel from "reinvented-color-wheel";

export default function useColorPicker(onChange: any) {
  const ref = React.useRef();
  const colorWheel = React.useRef();
  React.useEffect(() => {
    if (ref.current) {
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'ReinventedColorWheel' is not assignable to t... Remove this comment to see the full error message
      colorWheel.current = new ReinventedColorWheel({
        // appendTo is the only required property. specify the parent element of the color wheel.
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'undefined' is not assignable to type 'HTMLEl... Remove this comment to see the full error message
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
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
        while (refData.firstChild) {
          // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
          refData.removeChild(refData.firstChild);
        }
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type 'undefined'.
        colorWheel.current = null;
      }
    };
  }, [onChange, ref]);
  function updateColor(hsv: any) {
    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    colorWheel.current.hsv = hsv;
    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    colorWheel.current.redraw();
    onChange(colorWheel.current);
  }
  return [ref, updateColor];
}
