import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { Link } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";

import { fieldInputs } from "./constants";
import { Underline } from "../../../components";
import { capitalizeAll as capitalize } from "../../../utils";
import { logout, HTTPfetch } from "../../../api";

const SecurityTab = (props) => {
  const [inputs, setInputs] = useState({});
  const { addToast } = useToasts();
  const { security } = fieldInputs;
  const validator = new SimpleReactValidator();

  const updatePassword = async () => {
    const isValid = validator.allValid();
    if (!isValid) return;

    if (inputs["new_password"] === inputs["confirm_password"]) {
      try {
        await HTTPfetch(`security`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ new_password: inputs["new_password"] }),
        });
        showMessage("success", "Password updated successfully!");
        resetInputs();
      } catch (e) {
        showMessage("warning", "Something went wrong!");
      }
    } else {
      showMessage("warning", "Passwords do not match. Please, try again!");
    }
  };

  const onChange = ({ target }) =>
    setInputs({ ...inputs, [target.name]: target.value });

  const resetInputs = () => {
    setInputs({
      new_password: "",
      confirm_password: "",
    });
  };

  const showMessage = (type, message) => {
    addToast(message, {
      appearance: type,
      autoDismiss: true,
    });
  };

  return (
    <div style={{ margin: "0 50px 0 50px" }}>
      <h2 className="mb-20">Change Password</h2>

      <Underline left gradient hiddenSmall />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {security.map(({ name, rule, inputType }) => (
          <div>
            <p className="p-shrinked">{capitalize(name.replace("_", " "))} </p>
            <input
              type={inputType}
              name={name}
              value={inputs[name]}
              placeholder="********"
              onChange={(e) => onChange(e)}
            />
            {validator.message(name, inputs[name], rule)}
            <label className="error-label">
              {validator.errorMessages[name]}
            </label>
          </div>
        ))}
      </div>

      <hr></hr>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          className="btn btn-mod btn-medium-w btn-large btn-round"
          onClick={updatePassword}
        >
          Save changes
        </button>
        <Link
          className="btn btn-mod btn-large btn-round"
          style={{
            backgroundColor: "rgb(158, 33, 70)",
            color: "whitesmoke",
          }}
          to="/login"
          onClick={logout}
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default SecurityTab;
