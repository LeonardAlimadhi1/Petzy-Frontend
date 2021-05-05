import React from "react";

const Underline = ({
  left,
  marginBottom,
  gradient,
  color = "#317efa",
  width = "75px",
  borderRadius = "30px",
  hiddenSmall,
  marginTop
}) => (
  <div
    className={`underline ${hiddenSmall && "hidden-xs"}`}
    style={{
      width,
      borderRadius,
      height: "3px",
      background: gradient
        ? "linear-gradient(189deg, rgba(68,255,209,1) 0%, rgba(49,126,250,1) 56%, rgba(27,29,31,1) 100%)"
        : color,
      margin: left ? "0" : "auto",
      marginBottom: marginBottom || "30px",
      marginTop: marginTop || "0"
    }}
  ></div>
);

export default Underline;
