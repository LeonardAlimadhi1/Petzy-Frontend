import React, { useState } from "react";

const TextInput = ({
  label,
  textarea,
  section,
  onClear,
  className,
  id,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  let clearElement;

  return (
    <div
      className={`${className} input ${section}`}
      onFocus={() => setIsFocused(true)}
      onBlur={e => {
        setIsFocused(false);
      }}
      onMouseDown={e => {
        e.target === clearElement && onClear(section, id);
      }}
    >
      {label && <span>{label}</span>}
      {textarea ? (
        <textarea
          {...rest}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      ) : (
        <input {...rest} />
      )}

      <div className={isFocused && "focused"}>
        <div ref={e => (clearElement = e)} />
      </div>
    </div>
  );
};

export default TextInput;
