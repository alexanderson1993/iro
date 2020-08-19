import React from "react";
import useColorPicker from "./useColorPicker";
import tinycolor from "tinycolor2";
import { CopyToClipboard } from "react-copy-to-clipboard";
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
  function adjustColor(which, value) {
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
    changeColor([hsv.h, hsv.s * 100, hsv.v * 100]);
  }
  return (
    <div className="colorWheel">
      <div className="colorWheelHolder" ref={colorWheelRef} />
      <div className="colorColumn">
        <CopyToClipboard text={color.hex}>
          <div className="colorRep" style={{ backgroundColor: color.hex }} />
        </CopyToClipboard>
        <IconContext.Provider value={{ size: "1.25rem", className: "pointer" }}>
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
              changeColor([hsv.h, hsv.s * 100, hsv.v * 100]);
            }}
          />
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
              changeColor([hsv.h, hsv.s * 100, hsv.v * 100]);
            }}
          />
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
              changeColor([hsv.h, hsv.s * 100, hsv.v * 100]);
            }}
          />
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
              changeColor([hsv.h, hsv.s * 100, hsv.v * 100]);
            }}
          />
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
              changeColor([hsv.h, hsv.s * 100, hsv.v * 100]);
            }}
          />
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
              changeColor([hsv.h, hsv.s * 100, hsv.v * 100]);
            }}
          />
        </IconContext.Provider>
      </div>
      <div className="values">
        <ColorValue onChange={adjustColor} label={"Hue"} color={color.hsv[0]} />
        <ColorValue onChange={adjustColor} label="Sat" color={color.hsv[1]} />
        <ColorValue onChange={adjustColor} label="Val" color={color.hsv[2]} />
        <ColorValue onChange={adjustColor} label="Red" color={color.rgb[0]} />
        <ColorValue onChange={adjustColor} label="Green" color={color.rgb[1]} />
        <ColorValue onChange={adjustColor} label="Blue" color={color.rgb[2]} />
        <ColorValue onChange={adjustColor} label="Hex" long color={color.hex} />
        <ColorValue
          onChange={adjustColor}
          label="RGB"
          long
          color={`rgb(${color.rgb[0]},${color.rgb[1]},${color.rgb[2]})`}
        />

        <ColorValue
          onChange={adjustColor}
          label="RGBA"
          long
          color={`rgba(${color.rgb[0]},${color.rgb[1]},${color.rgb[2]}, ${alpha})`}
        />

        <ColorValue
          onChange={adjustColor}
          label="HSL"
          long
          color={`hsl(${color.hsl[0]},${color.hsl[1]}%,${color.hsl[2]}%, ${alpha})`}
        />

        <ColorValue
          onChange={adjustColor}
          label="HSLA"
          long
          color={`hsla(${color.hsl[0]},${color.hsl[1]}%,${color.hsl[2]}%, ${alpha})`}
        />

        <div className="value long">
          <span>Alpha: </span>
          <Input
            variant="flushed"
            type="search"
            value={alpha}
            onChange={(e) => setAlpha(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
