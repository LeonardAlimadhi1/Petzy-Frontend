import React from "react";
import { Link } from "react-router-dom";
import { Underline, ImageBanner, HeaderBackground } from "../../components";

const Team = () => {
  return (
    <div className="page" id="top">
      <HeaderBackground />

      <ImageBanner
        title="About Petzy"
        description="Petzy is a young Swiss start-up based in Zurich."
        margin="-120px 0 120px 0"
        blob="51% 49% 63% 37% / 49% 73% 27% 51%"
        button={{
          text: "Contact Us",
          to: "/contact"
        }}
        image="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=678&q=80"
      />

      <section
        className="page-section"
        style={{ paddingTop: "0", marginTop: "-120px" }}
      >
        <div className="container relative  align-center">
          <h1 style={{ marginBottom: "20px" }}>Meet The Team</h1>
          <p>
            We are a diverse team but with one single goal in mind.<br></br>{" "}
            Offering the best service.
          </p>
          <div className="row" style={{ marginTop: "50px" }}>
            <div className="col-sm-6 mb-xs-30 wow fadeInUp">
              <div className="team-item">
                <div className="team-item-image">
                  <img
                    src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                  />
                  <div className="team-item-detail">
                    <h4 className="font-alt normal">Hello & Welcome!</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      lacus, a&nbsp;iaculis diam.
                    </p>
                    <a href="mailto:joel@petzy.ch?Subject=Hello!">
                      joel@petzy.ch
                    </a>
                  </div>
                </div>

                <div className="team-item-descr font-alt">
                  <div className="team-item-name">Joel Baer</div>
                  <div className="team-item-role">CEO</div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 mb-xs-30 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item">
                <div className="team-item-image">
                  <img
                    src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                  />

                  <div className="team-item-detail">
                    <h4 className="font-alt normal">Nice to meet!</h4>

                    <p>
                      Curabitur augue, nec finibus mauris pretium eu. Duis
                      placerat ex gravida nibh tristique porta.
                    </p>
                    <a href="mailto:ted@petzy.ch?Subject=Hello!">
                      deni@petzy.ch
                    </a>
                  </div>
                </div>

                <div className="team-item-descr font-alt">
                  <div className="team-item-name">Deni Daja</div>
                  <div className="team-item-role">CTO</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "50px" }}>
            <div className="col-sm-6 mb-xs-30 wow fadeInUp">
              <div className="team-item">
                <div className="team-item-image">
                  <img
                    src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                  />
                  <div className="team-item-detail">
                    <h4 className="font-alt normal">Hello & Welcome!</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      lacus, a&nbsp;iaculis diam.
                    </p>
                    <a href="mailto:joel@petzy.ch?Subject=Hello!">
                      ted@petzy.ch
                    </a>
                  </div>
                </div>

                <div className="team-item-descr font-alt">
                  <div className="team-item-name">Ted Reka</div>
                  <div className="team-item-role">CMO</div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 mb-xs-30 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="team-item">
                <div className="team-item-image">
                  <img
                    src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                  />

                  <div className="team-item-detail">
                    <h4 className="font-alt normal">Whats Up!</h4>
                    <p>
                      Adipiscing elit curabitur eu&nbsp;adipiscing lacus
                      eu&nbsp;adipiscing lacus, a&nbsp;iaculis diam.
                    </p>
                    <a href="mailto:gianmarco@petzy.ch?Subject=Hello!">
                      gianmarco@petzy.ch
                    </a>
                  </div>
                </div>

                <div className="team-item-descr font-alt">
                  <div className="team-item-name">Gianmarco Bellet</div>
                  <div className="team-item-role">PROJECT MANAGER</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "50px" }}>
            <div className="col-sm-6 mb-xs-30 wow fadeInUp">
              <div className="team-item">
                <div className="team-item-image">
                  <img
                    src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                  />
                </div>

                <div className="team-item-descr font-alt">
                  <div className="team-item-name">Marley</div>
                  <div className="team-item-role">HEAD OF CUDDLING</div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 mb-xs-30 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="team-item">
                <div className="team-item-image">
                  <img
                    src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                  />
                </div>

                <div className="team-item-descr font-alt">
                  <div className="team-item-name">Blue</div>
                  <div className="team-item-role">HEAD OF PLAYING</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="page-section pt-0 pb-0 "
        style={{
          background:
            "linear-gradient(321deg, rgba(68,255,209,1) 0%, rgba(49,126,250,1) 100%)"
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{
            fill: "white"
          }}
        >
          <path d="M0,192L60,192C120,192,240,192,360,197.3C480,203,600,213,720,229.3C840,245,960,267,1080,256C1200,245,1320,203,1380,181.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
        <div className="container relative">
          <div
            className="row"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div className="col-sm-6 special-illustration">
              <div className="mt-140 mt-lg-80 mb-140 mb-lg-80">
                <div className="banner-content">
                  <h2 className="banner-heading font-alt">
                    Want to work with us?
                  </h2>

                  <div className="banner-decription">
                    We are a team of young, innovative students who share a
                    great love for animals and technology. Our mission is to
                    simplify everyday life with your dog and make daily tasks
                    simple.
                  </div>
                  <div className="local-scroll">
                    <Link to="form" className="btn btn-mod btn-large btn-round">
                      Try Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 banner-image wow fadeInUp">
              <img
                src="images/paws white.svg"
                style={{ maxWidth: "80%" }}
                alt=""
              />
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ fill: "white", marginBottom: "-50px" }}
          className="hidden-xs"
        >
          <path d="M0,192L60,197.3C120,203,240,213,360,181.3C480,149,600,75,720,69.3C840,64,960,128,1080,133.3C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </section>
    </div>
  );
};

export default Team;
