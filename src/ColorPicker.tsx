import React from "react";
import useColorPicker from "./useColorPicker";
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/tinycolor2` if it exists o... Remove this comment to see the full error message
import tinycolor from "tinycolor2";
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react-copy-to-clipboard` i... Remove this comment to see the full error message
import { CopyToClipboard } from "react-copy-to-clipboard";
// @ts-expect-error ts-migrate(6142) FIXME: Module './ColorValue' was resolved to '/Users/raan... Remove this comment to see the full error message
import ColorValue from "./ColorValue";
import {
  MdBrightnessHigh,
  MdBrightnessLow,
  MdRotateLeft,
  MdRotateRight,
  MdTonality,
  MdTimelapse,
} from "react-icons/md";
import { IconContext } from "react-icons";
import { Input } from "@chakra-ui/core";
export default function ColorPicker() {
  const [color, setColor] = React.useState({
    hsv: [0, 100, 100],
    rgb: [255, 0, 0],
    hsl: [0, 100, 50],
    hex: "#ff0000",
  });
  const [alpha, setAlpha] = React.useState(1);
  const updateColor = React.useCallback(
    (color) =>
      setColor({
        hsv: color.hsv,
        rgb: color.rgb,
        hsl: color.hsl,
        hex: color.hex,
      }),
    []
  );
  const [colorWheelRef, changeColor] = useColorPicker(updateColor);
  function adjustColor(which: any, value: any) {
    let newColor = tinycolor("red");
    switch (which) {
      case "Hue":
        newColor = tinycolor({ h: value, s: color.hsv[1], v: color.hsv[2] });
        break;
      case "Sat":
        newColor = tinycolor({
          h: color.hsv[0],
          s: value,
          v: color.hsv[2],
        });
        break;
      case "Val":
        newColor = tinycolor({
          h: color.hsv[0],
          s: color.hsv[1],
          v: value,
        });
        break;
      case "Red":
        newColor = tinycolor({
          r: value,
          g: color.rgb[1],
          b: color.rgb[2],
        });
        break;
      case "Green":
        newColor = tinycolor({
          r: color.rgb[0],
          g: value,
          b: color.rgb[2],
        });
        break;
      case "Blue":
        newColor = tinycolor({
          r: color.rgb[0],
          g: color.rgb[1],
          b: value,
        });
        break;
      case "Hex":
      case "RGB":
      case "RGBA":
      case "HSL":
      case "HSLA":
        newColor = tinycolor(value);
        break;
      default:
        newColor = tinycolor({
          r: color.rgb[0],
          g: color.rgb[1],
          b: color.rgb[2],
        });
        return;
    }
    if (!newColor.isValid()) return;
    const hsv = newColor.toHsv();
    // @ts-expect-error ts-migrate(2349) FIXME: Type 'MutableRefObject<undefined>' has no call sig... Remove this comment to see the full error message
    changeColor([hsv.h, hsv.s * 100, hsv.v * 100]);
  }
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="colorWheel">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="colorWheelHolder" ref={colorWheelRef} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="colorColumn">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CopyToClipboard text={color.hex}>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className="colorRep" style={{ backgroundColor: color.hex }} />
        </CopyToClipboard>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <IconContext.Provider value={{ size: "1.25rem", className: "pointer" }}>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <MdBrightnessHigh
            title="Lighten"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const newColor = tinycolor({
                h: color.hsv[0],
                s: color.hsv[1],
                v: color.hsv[2],
              }).lighten(5);
              const hsv = newColor.toHsv();
              // @ts-expect-error ts-migrate(2349) FIXME: Type 'MutableRefObject<undefined>' has no call sig... Remove this comment to see the full error message
              changeColor([hsv.h, hsv.s * 100, hsv.v * 100]);
            }}
          />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <MdBrightnessLow
            title="Darken"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const newColor = tinycolor({
                h: color.hsv[0],
                s: color.hsv[1],
                v: color.hsv[2],
              }).darken(5);
              const hsv = newColor.toHsv();
              // @ts-expect-error ts-migrate(2349) FIXME: Type 'MutableRefObject<undefined>' has no call sig... Remove this comment to see the full error message
              changeColor([hsv.h, hsv.s * 100, hsv.v * 100]);
            }}
          />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <MdRotateLeft
            title="Rotate Hue -"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const newColor = tinycolor({
                h: color.hsv[0],
                s: color.hsv[1],
                v: color.hsv[2],
              }).spin(-10);
              const hsv = newColor.toHsv();
              // @ts-expect-error ts-migrate(2349) FIXME: Type 'MutableRefObject<undefined>' has no call sig... Remove this comment to see the full error message
              changeColor([hsv.h, hsv.s * 100, hsv.v * 100]);
            }}
          />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <MdRotateRight
            title="Rotate Hue +"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const newColor = tinycolor({
                h: color.hsv[0],
                s: color.hsv[1],
                v: color.hsv[2],
              }).spin(10);
              const hsv = newColor.toHsv();
              // @ts-expect-error ts-migrate(2349) FIXME: Type 'MutableRefObject<undefined>' has no call sig... Remove this comment to see the full error message
              changeColor([hsv.h, hsv.s * 100, hsv.v * 100]);
            }}
          />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <MdTonality
            title="Desaturate"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const newColor = tinycolor({
                h: color.hsv[0],
                s: color.hsv[1],
                v: color.hsv[2],
              }).desaturate(5);
              const hsv = newColor.toHsv();
              // @ts-expect-error ts-migrate(2349) FIXME: Type 'MutableRefObject<undefined>' has no call sig... Remove this comment to see the full error message
              changeColor([hsv.h, hsv.s * 100, hsv.v * 100]);
            }}
          />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <MdTimelapse
            title="Saturate"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const newColor = tinycolor({
                h: color.hsv[0],
                s: color.hsv[1],
                v: color.hsv[2],
              }).saturate(5);
              const hsv = newColor.toHsv();
              // @ts-expect-error ts-migrate(2349) FIXME: Type 'MutableRefObject<undefined>' has no call sig... Remove this comment to see the full error message
              changeColor([hsv.h, hsv.s * 100, hsv.v * 100]);
            }}
          />
        </IconContext.Provider>
      </div>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="values">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ColorValue onChange={adjustColor} label={"Hue"} color={color.hsv[0]} />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ColorValue onChange={adjustColor} label="Sat" color={color.hsv[1]} />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ColorValue onChange={adjustColor} label="Val" color={color.hsv[2]} />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ColorValue onChange={adjustColor} label="Red" color={color.rgb[0]} />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ColorValue onChange={adjustColor} label="Green" color={color.rgb[1]} />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ColorValue onChange={adjustColor} label="Blue" color={color.rgb[2]} />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ColorValue onChange={adjustColor} label="Hex" long color={color.hex} />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ColorValue
          onChange={adjustColor}
          label="RGB"
          long
          color={`rgb(${color.rgb[0]},${color.rgb[1]},${color.rgb[2]})`}
        />

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ColorValue
          onChange={adjustColor}
          label="RGBA"
          long
          color={`rgba(${color.rgb[0]},${color.rgb[1]},${color.rgb[2]}, ${alpha})`}
        />

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ColorValue
          onChange={adjustColor}
          label="HSL"
          long
          color={`hsl(${color.hsl[0]},${color.hsl[1]}%,${color.hsl[2]}%, ${alpha})`}
        />

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ColorValue
          onChange={adjustColor}
          label="HSLA"
          long
          color={`hsla(${color.hsl[0]},${color.hsl[1]}%,${color.hsl[2]}%, ${alpha})`}
        />

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="value long">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <span>Alpha: </span>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Input
            variant="flushed"
            type="search"
            value={alpha}
            onChange={(e: any) => setAlpha(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
