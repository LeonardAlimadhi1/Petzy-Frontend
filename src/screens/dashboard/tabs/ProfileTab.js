import React, { useState, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import SimpleReactValidator from "simple-react-validator";

import { fieldInputs } from "./constants";
import { Underline } from "../../../components";
import { capitalizeAll as capitalize } from "../../../utils";
import { HTTPfetch } from "../../../api";

const ProfileTab = ({ defaultInputs }) => {
  const [inputs, setInputs] = useState(defaultInputs);
  const { addToast } = useToasts();
  const { user } = fieldInputs;
  const validator = new SimpleReactValidator();

  const updateUser = async () => {
    const isValid = validator.allValid();
    if (!isValid) return;

    try {
      await HTTPfetch(`user`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(inputs),
      });
      showMessage("success", "User updated successfully!");
    } catch (e) {
      showMessage("warning", "Something went wrong!");
    }
  };

  const onChange = ({ target }) =>
    setInputs({ ...inputs, [target.name]: target.value });

  const showMessage = (type, message) => {
    addToast(message, {
      appearance: type,
      autoDismiss: true,
    });
  };

  return (
    <div style={{ margin: "0 50px 0 50px" }}>
      <h2 style={{ marginBottom: "0px" }}>Profile</h2>
      <p className="p-shrinked-medium mb-20">
        Update your basic profile information below
      </p>

      <Underline left gradient hiddenSmall />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {user.map(({ name, rule, inputType }) => (
          <div>
            <p className="p-shrinked">{capitalize(name.replace("_", " "))} </p>
            <input
              type={inputType}
              name={name}
              value={inputs[name]}
              style={{ cursor: name === "email" ? "not-allowed" : "default" }}
              onChange={(e) => onChange(e)}
              disabled={name === "email"}
            />
            {validator.message(name, inputs[name], rule)}
            <label className="error-label">
              {validator.errorMessages[name]}
            </label>
            <hr />
          </div>
        ))}
      </div>

      <button
        className="btn btn-mod btn-medium-w btn-large btn-round"
        onClick={updateUser}
      >
        Save Changes
      </button>
    </div>
  );
};

export default ProfileTab;
