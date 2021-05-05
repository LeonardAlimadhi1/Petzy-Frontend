import React from "react";
import { capitalizeAll } from "../../../utils";

const Picker = ({
  options,
  className,
  type,
  value,
  onChange,
  customLeft = 14,
  ...rest
}) => {
  return (
    <div className={"selector-input " + className}>
      {value && (
        <div
          className="selector"
          style={{
            left: `${options.indexOf(value) * customLeft}em`
          }}
        />
      )}

      {options.map(option => (
        <div
          key={option}
          className={option === value ? "selected " : ""}
          onClick={event => onChange(option)}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <span>{capitalizeAll(option)}</span>
          <img alt="" src={`images/${type}/${option}.svg`} />
        </div>
      ))}
    </div>
  );
};

export default Picker;
