import React from "react";
import { Link } from "react-router-dom";

import { HeaderBackground, FullPageBanner } from "../../components";

const NotFound = ({ location }) => {
  const title = location && location.state ? location.state.title : "Hmm?!";
  const description =
    location && location.state
      ? location.state.description
      : "We cannot seem to find the page you are looking for.";

  return (
    <section className="page-section pt-0 pb-0">
      <HeaderBackground absolute nobackground />

      <FullPageBanner
        title={title}
        description={description}
        content={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link
              to="/form"
              className="landing-outline-button btn btn-mod btn-round btn-large"
            >
              Try Petzy
            </Link>

            <Link
              to="/"
              className="btn btn-mod btn-w btn-round btn-large"
              style={{ marginTop: "10px" }}
            >
              <i className="fa fa-angle-left" /> Back To Home Page
            </Link>
          </div>
        }
      />
    </section>
  );
};

export default NotFound;
