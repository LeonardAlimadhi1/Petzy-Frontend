import React from "react";
import { Link } from "react-router-dom";

import { Underline } from "../";

const Banner = ({
  title = "Ease to Setup",
  description,
  margin = "0 0 120px 0",
  padding = "60px 0 80px 0",
  customContent
}) => (
  <div
    class="col-md-12 col-lg-12 align-center"
    style={{ background: "#f8f8f8", padding: padding, margin: margin }}
  >
    <h1 class="font-alt mb-20 mb-sm-40">{title}</h1>
    <Underline gradient />
    <p class="align-center no-padding-mobile" style={{ padding: "0 120px" }}>
      {description}
    </p>
    <center>{customContent}</center>
  </div>
);

const ImageBanner = ({
  title = "Ease to Setup",
  description,
  button,
  customContent,
  noImage,
  margin = "0 0 120px 0",
  blob = "30% 70% 70% 30% / 30% 31% 69% 70%",
  image = "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=720&q=80"
}) => (
  <div
    class="col-md-12 col-lg-12 align-center image-banner-content"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      background: "#f8f8f8",
      padding: "120px 0 120px 0",
      margin
    }}
  >
    <div className="align-left">
      <h1 class="font-alt mb-20 mb-sm-40">{title}</h1>
      <Underline gradient left />
      <p>{description}</p>
      {!!button && (
        <Link
          to={button.to}
          className="btn btn-mod btn-large btn-round"
          style={{ marginTop: "50px" }}
        >
          {button.text}
        </Link>
      )}
      {customContent}
    </div>
    {!noImage && (
      <img
        className="blob-image"
        src={image}
        alt=""
        style={{ borderRadius: blob }}
        width="300"
        height="400"
      />
    )}
  </div>
);

const ImageBlob = ({
  blob,
  image = "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=720&q=80"
}) => (
  <img
    className="blob-image"
    src={image}
    alt=""
    style={{ borderRadius: blob }}
    width="600"
    height="450"
  />
);

const FullPageBanner = ({
  title = "Ease to Setup",
  description,
  content,
  button,
  unUnderline,
  margin = "60px 0 120px 0",
  blob = "30% 70% 70% 30% / 30% 31% 69% 70%",
  image = "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=720&q=80"
}) => (
  <div
    class="col-md-12 col-lg-12 align-center image-banner-content"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      padding: "120px 0 120px 0",
      margin
    }}
  >
    <img
      className="blob-image"
      src={image}
      alt=""
      style={{ borderRadius: blob }}
      width="300"
      height="400"
    />
    <div className="align-left">
      <h1 class="font-alt mb-20 mb-sm-40">{title}</h1>
      {!unUnderline && <Underline gradient left />}
      <p>{description}</p>
      {content}
    </div>
  </div>
);

const BackgroundImageBanner = ({
  title = "Choose Petzy",
  description = "You enjoy the presence of your dog. Let us focus on his wellbeing.",
  margin = "0 0 120px 0",
  image = "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
}) => (
  <div
    class="col-md-12 col-lg-12 align-center"
    style={{
      background: `url("${image}")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto",
      backgroundPosition: "center",
      padding: "120px 0 120px 0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin
    }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        background:
          "linear-gradient(159deg, rgba(49,126,250,0.85) 0%, rgba(27,29,31,0.85) 44%)"
      }}
    ></div>
    <h1 class="font-alt mb-20 mb-sm-40" style={{ color: "white" }}>
      {title}
    </h1>
    <Underline gradient />
    <p class="align-center" style={{ color: "white", padding: "0 20px" }}>
      {description}
    </p>
  </div>
);

export {
  Banner,
  ImageBanner,
  ImageBlob,
  FullPageBanner,
  BackgroundImageBanner
};
