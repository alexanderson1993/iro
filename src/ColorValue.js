import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Input } from "@chakra-ui/core";

export default function ColorValue({ label, color, long, onChange }) {
  const [focus, setFocus] = React.useState(false);
  const [key, setKey] = React.useState(color);
  React.useEffect(() => {
    if (focus) return;
    setKey(color);
  }, [color, focus]);
  return (
    <div className={`value ${long ? "long" : ""}`}>
      <CopyToClipboard text={color}>
        <span>{label}: </span>
      </CopyToClipboard>
      <Input
        variant="flushed"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        type="search"
        key={key}
        defaultValue={color}
        onChange={(e) => onChange(label, e.target.value)}
      />
    </div>
  );
}
