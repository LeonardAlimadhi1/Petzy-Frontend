import React from "react";
import { TextInput } from ".";

const NumberInput = ({ onChange, ...rest }) => {
  return (
    <TextInput
      type="number"
      step="any"
      lang="de"
      {...rest}
      onKeyDown={e => {
        if (e.key === "Backspace" && e.target.value.length === 1) onChange(0);
      }}
      onChange={e => {
        let value = e.target.value;

        if (value) {
          if (value.length > 1 && value[0] === "0") {
            value = value.slice(1);
          }
          onChange(value);
        }
      }}
    />
  );
};

export default NumberInput;
