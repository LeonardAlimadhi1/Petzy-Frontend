import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

import { login } from "../../api";
import {
  Underline,
  ImageBanner,
  FullPageBanner,
  HeaderBackground,
} from "../../components";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { addToast } = useToasts();

  const tryLogin = async () => {
    try {
      const { isLead, user } = await login(email, password);

      if (!isLead) {
        props.history.push("/dashboard");
      } else {
        props.history.push("/loading", {
          form: {
            ...user,
            breed: JSON.parse(user.dog.breed),
            isLead: true,
          },
        });
      }

      // :
    } catch (e) {
      addToast(e, { appearance: "warning", autoDismiss: true });
    }
  };

  return (
    <div className="page" id="top">
      <HeaderBackground absolute nobackground />

      <FullPageBanner
        title="Login Below"
        unUnderline
        content={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="align-left" style={{ marginTop: "-20px" }}>
              Access your analytics, orders in the dashboard.
            </p>

            <br></br>

            <div className="clearfix">
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  pattern=".{3,100}"
                  required=""
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  pattern=".{5,100}"
                  required=""
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button
                className=" btn btn-mod btn-large btn-round"
                id="login-btn"
                onClick={tryLogin}
              >
                Login
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Login;
