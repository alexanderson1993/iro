import React from "react";
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react-copy-to-clipboard` i... Remove this comment to see the full error message
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Input } from "@chakra-ui/core";

export default function ColorValue({
  label,
  color,
  long,
  onChange
}: any) {
  const [focus, setFocus] = React.useState(false);
  const [key, setKey] = React.useState(color);
  React.useEffect(() => {
    if (focus) return;
    setKey(color);
  }, [color, focus]);
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={`value ${long ? "long" : ""}`}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <CopyToClipboard text={color}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <span>{label}: </span>
      </CopyToClipboard>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Input
        variant="flushed"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        type="search"
        key={key}
        defaultValue={color}
        onChange={(e: any) => onChange(label, e.target.value)}
      />
    </div>
  );
}
