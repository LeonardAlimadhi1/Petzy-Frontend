import React from "react";

import { Underline } from "../../components";
import "./styles.css";

const Loader = ({ name }) => {
  return (
    <div className="dog-wrapper">
      <div className="dog">
        <div className="dog-body">
          <div className="dog-tail">
            <div className="dog-tail">
              <div className="dog-tail">
                <div className="dog-tail">
                  <div className="dog-tail">
                    <div className="dog-tail">
                      <div className="dog-tail">
                        <div className="dog-tail" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dog-torso" />
        <div className="dog-head">
          <div className="dog-ears">
            <div className="dog-ear" />
            <div className="dog-ear" />
          </div>
          <div className="dog-eyes">
            <div className="dog-eye" />
            <div className="dog-eye" />
          </div>
          <div className="dog-muzzle">
            <div className="dog-tongue" />
          </div>
        </div>
      </div>
      <h1 style={{ margin: "50px 0 10px 0", color: "white" }}>Please Wait</h1>
      <h2 className="saving">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </h2>
      <p style={{ color: "white", textAlign: "center", fontWeight: "500" }}>
        We are preparing a custom recipe for {name}.<br></br>
        It will be a treat!
      </p>
    </div>
  );
};

export default Loader;
