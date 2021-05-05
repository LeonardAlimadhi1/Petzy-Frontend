import React from "react";
import { capitalizeAll, capitalize } from "../utils";

const Editor = ({
  values,
  onSelect,
  setCurrentSection,
  className,
  ...rest
}) => {
  return (
    <div className={`editor ${className}`}>
      {Object.keys(values).map((section) => {
        const value = values[section];

        let print = value;

        if (typeof value === "string" && !["email", "health"].includes(section))
          print = capitalizeAll(value);
        else if (typeof value === "boolean") print = value ? "Yes" : "No";
        else if (section === "breed")
          print = value.crossbreed
            ? `${capitalizeAll(value.breed1)} - ${capitalizeAll(value.breed2)}`
            : capitalizeAll(value.breed1);
        else if (section === "age")
          print = `${value.years} years ${value.months} months`;
        else if (section === "health")
          print = value.length > 10 ? value.slice(0, 10).trim() + "..." : value;

        const title =
          section === "body_condition"
            ? capitalize(section.split("_").join(" "))
            : capitalize(section);

        return (
          <button onClick={() => setCurrentSection(section)}>
            <span>
              {title}
              {print !== "" && ": "}
            </span>
            {print}
          </button>
        );
      })}
    </div>
  );
};

export default Editor;
