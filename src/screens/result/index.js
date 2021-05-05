import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { HeaderBackground, Accordion, Banner } from "../../components";
import { parseClaims } from "./transforms";
import "./styles.css";

const Result = (props) => {
  const data = props.location.state;
  const [isRecipeShowing, setRecipeShowing] = useState(false);

  const { recipe, feedingAmounts } = data;
  const { name, age, weight, breed, sex } = data.dog;
  const { claims, composition, constituents, vitamins } = recipe.recipe;
  const { dailyKcal, dailyGrams } = feedingAmounts;

  const parsedClaims = parseClaims(claims);
  const parsedVitamins = parseClaims(vitamins);
  const parsedConstituents = parseClaims(constituents);

  useEffect(() => {
    if (!props.location.state)
      return (
        <Redirect
          to={{
            pathname: "no-result",
            state: {
              title: "?!",
              description:
                "But you are allowed to look at this cute dog instead.",
            },
          }}
        />
      );
  }, []);

  return (
    <div className="page" id="top">
      <HeaderBackground nobackground />

      <Banner
        title={`${name}'s Personal Food`}
        customContent={
          <p style={{ padding: "0 120px" }}>
            This is where the magic happens: we've taken all the information you
            gave us about <strong>{name}</strong>, and we've designed this
            recipe just for him. It's super tasty and packed with nutrients -
            everything that a{" "}
            <strong>
              {age.split(";")[0] == 0
                ? age.split(";")[1] + " month "
                : age.split(";")[0] + " year "}
              {sex} {breed.breed1}
              {breed.crossbreed ? "cross " + breed.breed2 : ""} weighing{" "}
              {weight}
              kg{" "}
            </strong>
            needs. We think {sex === "male" ? "he" : "she"} will love it.
          </p>
        }
        margin="-12% 0 120px 0"
      />

      {/* Claims Section */}
      <section class="page-section mb-40" style={{ padding: "0" }}>
        <div class="container relative">
          <div class="alt-service-grid">
            <div class="row">
              <div class="col-sm-6 col-md-3 col-lg-3">
                {parsedClaims.slice(0, 3).map((claim) => (
                  <div class="alt-service-wrap">
                    <div class="alt-service-item">
                      <h3 class="alt-features-title font-alt">
                        {claim.header}
                      </h3>
                      <p class="align-left-description">{claim.description} </p>
                    </div>
                  </div>
                ))}
              </div>

              <div class="col-md-6 col-lg-6 hidden-xs">
                <div class="alt-services-image">
                  <img src="images/package-svg/bag-back.png" alt=""></img>
                </div>
              </div>

              <div class="col-sm-6 col-md-3 col-lg-3">
                {parsedClaims.slice(3, 6).map((claim) => (
                  <div class="alt-service-wrap">
                    <div class="alt-service-item">
                      <h3 class="alt-features-title font-alt">
                        {claim.header}
                      </h3>
                      <p class="align-left-description">{claim.description} </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="page-section" style={{ padding: "0" }}>
        <div
          class="row mb-20"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>{name}'s Daily Portion</h3>
          <div class="col-sm-6 mb-20 nutrition-bar">
            <div className="triangle-down" />
            <p>
              {dailyGrams.toFixed(1)}g / {dailyKcal.toFixed(1)}kcal
            </p>
          </div>
          <p>Dry Food</p>
        </div>

        {!isRecipeShowing && (
          <center>
            <Banner
              title={`${name}'s Custom Recipe`}
              customContent={
                <a
                  onClick={() => setRecipeShowing(true)}
                  style={{ cursor: "pointer" }}
                >
                  <h3>View Recipe Details</h3>
                </a>
              }
              margin="60px 0 60px 0"
            />
          </center>
        )}

        {isRecipeShowing && (
          <section class="page-section" style={{ padding: "0" }}>
            <Accordion
              accordions={[
                {
                  title: "Composition & Ingredients",
                  customContent: (
                    <p style={{ textAlign: "center" }}>{composition}</p>
                  ),
                },
                {
                  title: "Nutritional Additives",
                  customContent: parsedVitamins.map((vitamin) => (
                    <>
                      <div className="details-datatable">
                        <p className="p-shrinked" style={{ color: "#5f5f5f" }}>
                          {vitamin.header}
                        </p>
                        <p className="p-shrinked" style={{ fontWeight: "500" }}>
                          {vitamin.description}
                        </p>
                      </div>
                      <hr></hr>
                    </>
                  )),
                },
                {
                  title: "Analytical Constituents",
                  customContent: parsedConstituents.map((constituent) => (
                    <>
                      <div className="details-datatable">
                        <p className="p-shrinked" style={{ color: "#5f5f5f" }}>
                          {constituent.header}
                        </p>
                        <p className="p-shrinked" style={{ fontWeight: "500" }}>
                          {constituent.description}
                        </p>
                      </div>
                      <hr></hr>
                    </>
                  )),
                },
              ]}
            />
          </section>
        )}

        <section class="page-section" style={{ padding: "0" }}>
          <div
            class="row"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div className="col-sm-8 mb-120">
              <h2 style={{ marginBottom: "0" }}>Choose Petzy</h2>
              <p class="mb-20">
                And make your life easier by never running out of healthy food
                again.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Result;
