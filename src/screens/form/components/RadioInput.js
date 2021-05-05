import React from "react";
import { capitalize } from "../../../utils";

const RadioInput = ({
  descriptions,
  options,
  className = "",
  value,
  onChange,
  section,
  customLeft = 13,
  ...rest
}) => {
  const getValueIndex = () => {
    let index = 0;
    if (typeof options[0] === "object")
      options.forEach((option, optionIndex) => {
        if (option.value === value) index = optionIndex;
      });
    else index = options.indexOf(value);

    return index < 0 ? 0 : index;
  };

  return (
    <div className={"radio-input " + className}>
      <div className="options">
        {options.map(option => {
          const label = typeof option === "object" ? option.label : option;
          const optionValue =
            typeof option === "object" ? option.value : option;

          return (
            <div
              key={label}
              className={`${value === optionValue ? "selected" : ""} option`}
              onClick={event => onChange(optionValue)}
            >
              {capitalize(label)}
            </div>
          );
        })}
      </div>

      {value !== null && (
        <div
          className="selector"
          style={{
            left: `${getValueIndex() * customLeft}em`
          }}
        />
      )}

      {descriptions && (
        <div
          className="indicator"
          style={{
            left: `${getValueIndex() * customLeft}em`
          }}
        />
      )}

      {descriptions && (
        <div className="descriptions">
          <div
            style={{
              width: "400%",
              left: `-${getValueIndex() * 100}%`
            }}
          >
            {descriptions.map((desc, index) => (
              <div key={index}>{desc}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RadioInput;
