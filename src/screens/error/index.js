import React from "react";
import { Link } from "react-router-dom";
import { HeaderBackground, FullPageBanner } from "../../components";
import { get } from "../../utils";

const Error = props => {
  const getProp = get(props);
  const stateDescription = getProp(["location", "state", "description"]);
  const propDescription = getProp(["error"]);
  const customMessage =
    "Something went wrong. Please take your dog for a walk while we make sure this won't happen again.";

  const message = stateDescription || propDescription || customMessage;

  return (
    <section className="page-section pt-0 pb-0">
      <HeaderBackground absolute nobackground />
      <FullPageBanner
        title="Not Allowed."
        description={message}
        content={
          <div
            style={{ display: "flex", flexDirection: "column", width: "300px" }}
          >
            <Link
              to="/"
              className="landing-outline-button btn btn-mod btn-round btn-large"
            >
              Take me Home
            </Link>
          </div>
        }
      />
    </section>
  );
};

export default Error;
