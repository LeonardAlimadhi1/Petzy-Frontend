import React, { useState, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import { HTTPfetch } from "../../api";
import { Underline, Banner, ImageBlob } from "../../components";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const { addToast } = useToasts();

  useEffect(() => {
    reloadCarousel();
    fixStyles();
  }, []);

  const subscribeToNewsletter = async () => {
    if (!email || !email.match(/^[^s@]+@[^s@]+.[^s@]+$/))
      addToast("Email is not valid!", {
        appearance: "warning",
        autoDismiss: true,
      });
    else {
      try {
        await HTTPfetch(`subscribe/newsletter`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email }),
        });
        addToast("Successfuly registered to our newsletter!", {
          appearance: "success",
          autoDismiss: true,
        });
      } catch (e) {
        addToast(JSON.stringify(e), {
          appearance: "warning",
          autoDismiss: true,
        });
      }
    }
  };

  const reloadCarousel = () => {
    const script = document.createElement("script");
    script.src = "js/initSliders.js";
    document.body.appendChild(script);
  };

  const fixStyles = () => {
    document.getElementsByClassName("typewriter")[0].childNodes[1].style.color =
      "#44ffd1";
  };

  return (
    <div className="page" id="top">
      <section
        class="home-section bg-dark mb-100"
        data-background="video/puppy.jpg"
        id="home"
        style={{ backgroundImage: 'url("video/puppy.jpg")' }}
      >
        <div class="js-height-full">
          <div
            class="bg-video-wrapper"
            id="video-background-1"
            style={{
              background:
                "linear-gradient(45deg, rgba(49,126,250,1) 0%, rgba(112,166,250,1) 100%)",
            }}
          >
            <video
              id="video_background"
              preload="auto"
              autoplay="autoplay"
              loop="true"
              playsinline
              muted
            >
              <source src="video/dog_eating.mp4" type="video/mp4"></source>
            </video>
            {/* <img
              src="/images/new_background.png"
              style={{ position: "absolute", right: "-150px", top: "100px" }}
            /> */}
            <div class="bg-video-overlay bg-dark-alfa-50"></div>
          </div>

          <div class="home-content">
            <div class="home-text">
              <h2 class="hs-line-7" style={{ color: "white", margin: "0" }}>
                Dog Food
              </h2>

              <div style={{ margin: "20px 0px 20px 5px" }}>
                <ReactTypingEffect
                  text={["AS UNIQUE", "AS SPECIAL", "AS AWESOME"]}
                  eraseDelay={1000}
                  speed={150}
                  className="typewriter"
                  cursorClassName="cursor"
                />
              </div>

              <h2 class="hs-line-7 mb-50" style={{ color: "white" }}>
                As your dog
              </h2>

              <div class="local-scroll">
                <a
                  href="#about"
                  class="btn btn-mod btn-large btn-round"
                  style={{ color: "#1b1d1f" }}
                >
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container relative mb-100">
        <div class="row multi-columns-row alt-features-grid">
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="alt-features-item align-center">
              <div class="alt-features-icon">
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="50 0 100 200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="50 0 100 200"
                  role="img"
                  aria-labelledby="comp-jth8evib-svgtitle"
                  style={{ width: "100px", height: "100px", fill: "#317efa" }}
                >
                  <g>
                    <path d="M97 0h7v33h-7V0z"></path>
                    <path d="M75.2 36.9L66.6 22l6.5-3.6 8.5 14.8-6.4 3.7z"></path>
                    <path d="M106 60.5v7.4c11 0 20.4 8.8 20.4 20.2 0 .1-.1 0-.1 0h7.4c.2-15-12-27.7-27.4-28-.1 0-.3.4-.3.4z"></path>
                    <path d="M100 42.1c-27.6 0-50 22.3-50 49.9 0 8 1.9 15.9 5.6 23 2.5 5.7 5.8 11.2 9.3 16.3C69.3 138 73 143.6 73 150v33c0 2 1.6 2.2 3.7 2.2h7.5c.6 7 7.4 14.8 15.8 14.8s15.2-7.8 15.8-14.8h7.5c2.1 0 3.7 0 3.7-2.2v-33c0-6.4 3.8-12.1 8.2-18.7 3.7-5.3 6.9-10.9 9.4-16.8 3.5-7 5.4-14.7 5.4-22.5 0-27.5-22.4-49.9-50-49.9zm0 150.5c-4.3 0-7.8-4.4-8.3-7.4h16.7c-.6 3-4.1 7.4-8.4 7.4zm20-14.4H81v-10h39v10zm0-12H81v-7h39v7zm0-9H81v-6h39v6zm17.9-47.1h-.9v1.4c-2 5.6-4.9 10.7-8.3 15.7-4.7 7.1-8.4 13-8.7 22H80.7c-.3-9-4.5-14.9-9.1-22-3-4.7-6.5-9.4-8.5-15.2v-.3c-3-6-5.2-12.8-5.2-19.6 0-23.5 18.9-42.5 42.4-42.5s42.4 18.4 42.4 41.9c-.1 6.7-1.8 13.6-4.8 18.6z"></path>
                    <path d="M125.3 36.9l-6.4-3.7 8.5-14.8 6.4 3.7-8.5 14.8z"></path>
                  </g>
                </svg>
              </div>
              <h3 class="alt-features-title font-alt">INNOVATIVE</h3>
              <p>
                PETZY is changing the whole pet food industry. Our focus is to
                simplify your life with your dog and to make it more
                comfortable.
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="alt-features-item align-center">
              <div class="alt-features-icon">
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="50 0 100 200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="50 0 100 200"
                  role="img"
                  aria-labelledby="comp-jth8evib-svgtitle"
                  style={{ width: "100px", height: "100px", fill: "#317efa" }}
                >
                  <g>
                    <path d="M115 95.525c-.369 0-.738-.067-1.087-.204L59.914 74.435l2.174-5.56L115 89.339l52.913-20.464 2.174 5.56-53.999 20.886c-.35.137-.719.204-1.088.204z"></path>
                    <path d="M85 83.59a2.998 2.998 0 0 1-2.795-1.903 2.977 2.977 0 0 1 1.708-3.861l53.999-20.886a3.004 3.004 0 0 1 3.882 1.699 2.977 2.977 0 0 1-1.708 3.861L86.087 83.386c-.357.14-.724.204-1.087.204z"></path>
                    <path d="M115 155.2c-.369 0-.738-.067-1.087-.204L59.914 134.11a2.983 2.983 0 0 1-1.913-2.78v-5.967h6v3.928L115 149.014l50.999-19.724V70.711L115 50.987 64 70.711v18.847h-6V68.671c0-1.23.759-2.334 1.913-2.78l53.999-20.886a2.978 2.978 0 0 1 2.174 0l53.999 20.886a2.983 2.983 0 0 1 1.913 2.78v62.659c0 1.23-.759 2.334-1.913 2.78l-53.999 20.886a2.964 2.964 0 0 1-1.086.204z"></path>
                    <path d="M64 110.444v8.951h-6v-8.951h6z"></path>
                    <path d="M64 95.525v8.951h-6v-8.951h6z"></path>
                    <path d="M70.001 86.574v5.967h-42v-5.967h42z"></path>
                    <path d="M82.001 101.493v5.967h-36v-5.967h36z"></path>
                    <path d="M73.001 116.411v5.967h-36v-5.967h36z"></path>
                    <path d="M118 92.541v59.675h-6V92.541h6z"></path>
                    <path d="M159.999 122.379v5.967h-6v-5.967h6z"></path>
                    <path d="M151 125.363v5.967h-6v-5.967h6z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="alt-features-item align-center">
              <div class="alt-features-icon">
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="50 0 100 200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="50 0 100 200"
                  role="img"
                  aria-labelledby="comp-jth8evib-svgtitle"
                  style={{ width: "100px", height: "100px", fill: "#317efa" }}
                >
                  <g>
                    <path d="M137.6 111h.6c7.8 0 13.3-7.9 10.7-15.4-1.7-4.9 0-10.4 4.3-13.4 6.5-4.6 6.5-14.4 0-19-4.2-3-6-8.4-4.3-13.4 2.6-7.5-2.9-15.4-10.7-15.4h-.6c-5 0-9.4-3.3-10.9-8.3-1.5-5.2-6.1-8.3-10.9-8.3-2.4 0-4.8.8-6.9 2.4-2 1.6-4.5 2.4-6.9 2.4-2.4 0-4.9-.8-6.9-2.4-2.1-1.6-4.5-2.4-6.9-2.4-4.8 0-9.4 3.1-10.9 8.3-1.4 4.9-5.9 8.3-10.9 8.3h-.6c-7.8 0-13.3 7.9-10.7 15.4 1.7 4.9 0 10.4-4.3 13.4-6.5 4.6-6.5 14.4 0 19 4.2 3 6 8.4 4.3 13.4-2.6 7.4 2.8 15.2 10.4 15.4L42 164.1l27.8-10.6 9.3 28.6 20.5-45.9 20.5 45.8 9.3-28.5 27.9 10.7L133 112c1.4-.6 3-1 4.6-1zm-76.9-7.7c-1.2-1.8-1.5-4-.8-6.1 2.4-7-.1-14.8-6.1-19C52 77 51 75 51 72.8s1-4.2 2.8-5.5c6-4.2 8.5-12 6.1-19-.7-2.1-.4-4.3.8-6.1 1.2-1.8 3.2-2.8 5.3-2.8h.6c7.1 0 13.4-4.8 15.5-11.8 1-3.3 3.9-4.8 6.3-4.8 1.4 0 2.8.5 3.9 1.4 2.8 2.2 6.3 3.4 9.8 3.4 3.5 0 7-1.2 9.8-3.4 1.2-.9 2.5-1.4 3.9-1.4 2.4 0 5.3 1.5 6.3 4.8 2 6.9 8.4 11.8 15.5 11.8h.6c2.1 0 4.1 1 5.3 2.8 1.2 1.8 1.5 4 .8 6.1-2.4 7 .1 14.8 6.1 19 1.8 1.3 2.8 3.3 2.8 5.5s-1 4.2-2.8 5.5c-6 4.2-8.5 12-6.1 19 .7 2.1.4 4.3-.8 6.1-1.2 1.8-3.2 2.8-5.3 2.8h-.6c-7.1 0-13.4 4.8-15.5 11.8-1 3.3-3.9 4.8-6.3 4.8-1.4 0-2.8-.5-3.9-1.4-2.8-2.2-6.3-3.4-9.8-3.4-3.5 0-7 1.2-9.8 3.4-1.2.9-2.5 1.4-3.9 1.4-2.4 0-5.3-1.5-6.3-4.8-2-6.9-8.4-11.8-15.5-11.8H66c-2.1-.1-4.1-1.1-5.3-2.9zM98 123.5l-1.4.6c.5-.2 1-.4 1.4-.6zm-18.2 45.1l-7-21.6-21.6 8.3 19.4-43.4-1.3-.6c3.8 1 7 3.9 8.2 7.9 1.5 5.2 6.1 8.3 10.9 8.3 2.2 0 4.4-.7 6.4-2.1l2.2 4.8-17.2 38.4zm46.6-21.5l-7 21.6L99 123.2c1-.3 2-.4 3-.4 2.4 0 4.9.8 6.9 2.4 2.1 1.6 4.5 2.4 6.9 2.4 4.8 0 9.4-3.1 10.9-8.3.5-1.7 1.3-3.1 2.4-4.4l18.8 40.4-21.5-8.2z"></path>
                    <path d="M94.5 93.2l3.6 3.2.1-.1.1.1 3.1-3.7 23.9-28.2 3.2-3.7-3.7-3.2-5.8-5.1-3.6-3.2-3.1 3.7-15.9 18.6-5.8-5.1-3.6-3.2-3.1 3.7-5 5.9-3.1 3.7 3.6 3.2 15.1 13.4zm-7.1-22.9l9.4 8.3 19-22.4 5.8 5.1-23.8 28.1-.1-.1-.1.1-15.1-13.2 4.9-5.9z"></path>
                    <path d="M102.1 114c22.3 0 40.5-18.5 40.5-41.2s-18.1-41.2-40.5-41.2S61.6 50 61.6 72.8 79.8 114 102.1 114zm0-77.6c19.7 0 35.7 16.3 35.7 36.3s-16 36.3-35.7 36.3c-19.7 0-35.7-16.3-35.7-36.3s16-36.3 35.7-36.3z"></path>
                  </g>
                </svg>
              </div>
              <h3 class="alt-features-title font-alt">PREMIUM QUALITY</h3>
              <p>
                Our goal is to provide your dog with the ideal feed mix. The
                food is 100% organic and has no artificial additives.
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="alt-features-item align-center">
              <div class="alt-features-icon">
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="50 0 100 200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="50 0 100 200"
                  role="img"
                  aria-labelledby="comp-jth8evib-svgtitle"
                  style={{ width: "100px", height: "100px", fill: "#317efa" }}
                >
                  <g>
                    <path d="M70.6 47.3c-.9-2.9-51.3 4.2-55.7 38.8-4 31.2 5.5 41.7 12.3 42.6s17-.1 22.2-39.9c5.1-40.4 22.2-38.6 21.2-41.5zm30.2-5.3c-17.2 0-45.3 13.1-45.3 40.1 0 22.4-5 31.2-5 39.4s3.1 36.5 50.7 36.5 48.9-27.9 48.9-37.3c0-5.4-5.7-15.3-5.7-37.7 0-26.8-26.5-41-43.6-41zM66.1 89.2c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7c0 4.8-3.9 8.7-8.7 8.7s-8.7-3.9-8.7-8.7zm34.4 66.2c-5 0-9.1-.6-12.1-1.3 6.8-1.5 10.9-6.9 12.7-9.9 1.9 2.9 6.1 8.3 12.2 10.1-3.4.6-7.7 1.1-12.8 1.1zm16.7-3.2c-9.3 0-15.1-10.7-15.1-10.8-.2-.4-.6-.6-1.1-.6s-.9.3-1.1.7c0 .1-4.9 10.8-15 10.8-14.4 0-15.5-11.2-15.5-18.8 0-15.5 26.1-23.3 26.1-61.2 0-10.9-.8-12.1-.8-15.2 0 0-.6-5 5.8-5s5.1 5.3 5.1 5.3c0 3.2-.8 4.6-.8 15.4 0 37.9 28 44.9 28 60.5.1 8.1-2.3 18.9-15.6 18.9zm9.4-54.3c-4.8 0-8.7-3.9-8.7-8.7 0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8.7-8.7 8.7zm-38.2 28.3c0 3.7 2.6 5.4 4.1 5.4 3.9 0-2.4-4.6 1.8-4.6 6 0 1.5 5.1 5.9 5.1s.2-5.1 6-5.1c3.6 0-1.9 4.3 2.2 4.3 2.1 0 3.8-1.3 3.8-5 0-3.9-3.3-8-11.9-8-8.5 0-11.9 4-11.9 7.9zm-6.7-35.5c0-3-2.5-5.5-5.5-5.5s-5.5 2.5-5.5 5.5 2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5zm45.5-5.5c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5zm57.8.9c-4.5-34.6-54.8-41.6-55.7-38.7-1 2.9 16.1 1.1 21.3 41.5 5.2 39.8 15.4 40.8 22.2 39.9 6.8-1 16.2-11.5 12.2-42.7z"></path>
                  </g>
                </svg>
              </div>
              <h3 class="alt-features-title font-alt">INDIVIDUAL MIX</h3>
              <p>
                Each dog is individual and has its own needs. PETZY creates the
                most ideal feed mix specifically for your dog.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* <img
          src="/images/package-svg/pet-43.svg"
          style={{
            position: "absolute",
            height: "1000px",
            width: "10000px",
            top: "25%",
            transform: 'translateY("-25%")'
          }}
        /> */}
        <section
          className="page-section"
          style={{ paddingTop: "0" }}
          id="about"
        >
          <Banner
            title="Easy to Setup"
            description="Get started with Petzy in just three easy steps."
          />

          <div className="container relative">
            <div className="row xs-reverse">
              <div className="col-md-6 mb-sm-40">
                <div className="work-full-media mt-0 banner-image wow fadeInUp">
                  <img src="/images/landing_image3.png" />
                  {/* <ImageBlob
                  blob="43% 57% 26% 74% / 53% 44% 56% 47%"
                  image="/images/landing_image1.jpg"
                ></ImageBlob> */}
                </div>
              </div>

              <div className="col-md-6 col-lg-5 col-lg-offset-1">
                <div>
                  <strong style={{ color: "black", fontSize: "16px" }}>
                    Step One
                  </strong>
                  <h1
                    className="font-alt mb-10 mb-xxs-10"
                    style={{ color: "#317efa", marginTop: "-10px" }}
                  >
                    Profile
                  </h1>
                  <p>
                    You create a{" "}
                    <span className="highlighted">
                      free profile for your dog.
                    </span>{" "}
                    We need the age, breed and other details of your dog to find
                    the ideal dog food mix.
                  </p>
                  <Link
                    to="/form"
                    class="landing-outline-button btn btn-mod btn-large btn-round"
                  >
                    Describe Your Dog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="mt-0 mb-0 hidden-xs smaller-hr" />

        <section className="page-section">
          <div className="container relative">
            <div className="row">
              <div className="col-md-6 col-lg-6 mb-sm-40">
                <div>
                  <strong style={{ color: "black", fontSize: "16px" }}>
                    Step Two
                  </strong>

                  <h1
                    className="font-alt mb-10 mb-xxs-10"
                    style={{ color: "#317efa", marginTop: "-10px" }}
                  >
                    Recipe
                  </h1>
                  <p>
                    Based on your information, our algorithm will create your{" "}
                    <span className="highlighted">personal dog food</span>{" "}
                    calculations.
                  </p>
                  <Link
                    to="/contact"
                    class="landing-outline-button btn btn-mod btn-large btn-round"
                  >
                    How Does It Work
                  </Link>
                </div>
              </div>

              <div className="col-md-6 ">
                <div className="work-full-media mt-0 banner-image wow fadeInUp">
                  {/* <img src="illustrations/algorithm.svg" alt="" /> */}
                  <img src="/images/landing_image2.jpeg" />

                  {/* <ImageBlob
                  blob="42% 58% 18% 82% / 73% 26% 74% 27%"
                  image="https://images.unsplash.com/photo-1543554618-7e19c5e393d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1496&q=80"
                /> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="mt-0 mb-0 hidden-xs smaller-hr" />

        <section className="page-section">
          <div className="container relative">
            <div className="row xs-reverse">
              <div className="col-md-6 mb-sm-40">
                <div className="work-full-media mt-0 banner-image wow fadeInUp">
                  <img src="/images/landing_image1.jpg" />

                  {/* <ImageBlob
                   blob="71% 29% 52% 48% / 67% 54% 46% 33%"
                   image="https://images.unsplash.com/photo-1536809188428-e8ecf663d0be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                 /> */}
                </div>
              </div>

              <div className="col-md-6 col-lg-5 col-lg-offset-1">
                <div>
                  <strong style={{ color: "black", fontSize: "16px" }}>
                    Step Three
                  </strong>

                  <Link
                    to="/form"
                    class="landing-outline-button btn btn-mod btn-large btn-round"
                  >
                    Try Petzy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="page-section">
          <Banner
            title="Perfect for your Dog"
            description="With innovative technology, PETZY simplifies your everyday
          life and changes the life of your dog."
            margin="-50px 0 100px 0"
          />
          <div class="container relative mobile-package">
            <div class="row">
              <div class="col-sm-6 col-md-3 col-lg-3">
                <div class="alt-service-wrap">
                  <div class="alt-service-item">
                    <div class="alt-service-icon">
                      <img src="/images/package-svg/1.svg"></img>
                    </div>
                    <h3 class="alt-features-title font-alt">
                      No artificial coloring and preservatives
                    </h3>
                    <p class="p-shrinked-mini align-left-description">
                      We won't use artificial coloring and preservatives in our
                      food for a more genuine diet
                    </p>
                  </div>
                </div>

                <div class="alt-service-wrap">
                  <div class="alt-service-item">
                    <div class="alt-service-icon">
                      <img src="/images/package-svg/2.svg"></img>
                    </div>
                    <h3 class="alt-features-title font-alt">
                      Never run out of food again
                    </h3>
                    <p class="p-shrinked-mini align-left-description">
                      We will ship the right amount of food for your best friend
                      every month to your doorstep
                    </p>
                  </div>
                </div>

                <div class="alt-service-wrap">
                  <div class="alt-service-item">
                    <div class="alt-service-icon">
                      <img src="/images/package-svg/3.svg"></img>
                    </div>
                    <h3 class="alt-features-title font-alt">
                      All grain free blends
                    </h3>
                    <p class="p-shrinked-mini align-left-description">
                      All our food is grain free to help your friend have a
                      better digestion
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-6">
                <div class="alt-services-image">
                  <img
                    className="mobile-package-image"
                    src="images/package-svg/bag-front.png"
                    alt=""
                  ></img>
                </div>
              </div>

              <div class="col-sm-6 col-md-3 col-lg-3">
                <div class="alt-service-wrap">
                  <div class="alt-service-item">
                    <div class="alt-service-icon">
                      <img src="/images/package-svg/4.svg"></img>
                    </div>
                    <h3 class="alt-features-title font-alt">
                      Free monthly delivery
                    </h3>
                    <p class="p-shrinked-mini align-left-description">
                      Every month delivery is free of charge and you can change
                      the delivery date as you prefer
                    </p>
                  </div>
                </div>

                <div class="alt-service-wrap">
                  <div class="alt-service-item">
                    <div class="alt-service-icon">
                      <img src="/images/package-svg/5.svg"></img>
                    </div>
                    <h3 class="alt-features-title font-alt">
                      High levels of premium quality meat and fish
                    </h3>
                    <p class="p-shrinked-mini align-left-description">
                      High levels of meat content is fundamental for dogs to
                      have a healthy nutrition and body
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        id="wave"
        style={{
          backgroundImage:
            "linear-gradient(5deg, rgba(68,255,209,1) 0%, rgba(49,126,250,1) 100%)",
          marginBottom: "50px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ fill: "white" }}
        >
          <path d="M0,160L60,160C120,160,240,160,360,144C480,128,600,96,720,112C840,128,960,192,1080,208C1200,224,1320,192,1380,176L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>

        <div className="align-center">
          <h3 className="banner-heading font-alt special-banner">
            We rely on 100% organic dog food without artificial additives.
            <br />
            Only the best for your dog.
          </h3>
          <Link
            to="form"
            style={{ zIndex: "100" }}
            className="btn btn-mod btn-large btn-round"
          >
            Try Now
          </Link>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ fill: "white", marginTop: "-50px", marginBottom: "-10px" }}
        >
          <path d="M0,256L120,261.3C240,267,480,277,720,272C960,267,1200,245,1320,234.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
      </div>

      <section class="page-section mb-0" style={{ padding: "0" }}>
        <Banner
          title="Our Customers"
          description="Look what our customers have to say about Petzy"
          margin="120px 0 0 0"
        />
      </section>

      <div>
        {/* <img
          src="/images/shape.svg"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%"
          }}
          alt=""
        ></img> */}
        <section class="page-section fullwidth-slider">
          <div class="container relative">
            <div class="row">
              <div class="col-md-8 col-md-offset-2 align-center">
                <img
                  src="https://i2.wp.com/www.happydogmom.com/wp-content/uploads/2017/08/grumpypups-20151206-R48C4799-happy-healthy-dog.jpg?fit=900%2C600&ssl=1"
                  alt=""
                  className="reviews-image"
                />
                <div style={{ padding: "0 0 20px 0" }}>
                  <span className="review-description">
                    <span className="double-quotes-start hidden-xs">''</span>
                    My dog and I love Petzy! The food is very healthy, delivery
                    on point and great customer service.
                    <span className="double-quotes-end hidden-xs">''</span>
                  </span>
                  <footer
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    <p className="highlighted" style={{ fontWeight: "600" }}>
                      Bob
                    </p>
                    <span style={{ fontWeight: "500" }}>
                      Eating Petzy food for 3 months
                    </span>
                  </footer>
                </div>
              </div>
            </div>
          </div>
          <div class="container relative">
            <div class="row">
              <div class="col-md-8 col-md-offset-2 align-center">
                <img
                  src="https://media.mnn.com/assets/images/2014/07/girl-hugging-dog.jpg"
                  alt=""
                  className="reviews-image"
                />
                <div style={{ padding: "0 0 20px 0" }}>
                  <span className="review-description">
                    <span className="double-quotes-start hidden-xs">"</span>
                    Great Experience! The delivery is always on time and the
                    food quality is extraordinary!
                    <span className="double-quotes-end hidden-xs">"</span>
                  </span>
                  <footer
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    <p className="highlighted" style={{ fontWeight: "600" }}>
                      Tommy
                    </p>
                    <span style={{ fontWeight: "500" }}>
                      Eating Petzy food for 11 months
                    </span>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        className="small-section bg-gray-lighter"
        style={{ paddingBottom: "0" }}
      >
        <div className="container relative">
          <div className=" align-center" id="mailchimp">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h1 class="font-alt" style={{ marginBottom: "0px" }}>
                  Newsletter
                </h1>
                <Underline gradient />

                <p style={{ marginBottom: "80px" }}>
                  Subscribe to our newsletter. We promise not to spam.
                </p>

                <div className="newsletter-label font-alt"></div>

                <div className="mb-20 newsletter-subscription">
                  <input
                    placeholder="Enter Your Email"
                    className="newsletter-field form-control input-md round mb-xs-10"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      height: "37px",
                      marginTop: "0px",
                      borderTopLeftRadius: "15px !important",
                      borderBottomLeftRadius: "15px !important",
                    }}
                  />

                  <button
                    className="btn btn-mod btn-medium btn-round mb-xs-10 mobile-rectangle"
                    onClick={subscribeToNewsletter}
                  >
                    Subscribe
                  </button>
                </div>

                <div id="subscribe-result" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
