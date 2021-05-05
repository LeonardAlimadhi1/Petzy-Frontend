import React from "react";
import { Link } from "react-router-dom";

import { capitalize as c, capitalizeAll as ca } from "../../../utils";
import { Accordion, Banner, Underline } from "../../../components";

const RecipeTab = ({ dog, recipe, user }) => {
  const { name, daily_grams, daily_kcal } = dog;
  const { claims, vitamins, constituents, composition, traceElements } = recipe;

  const formatValues = (key) => {
    switch (key) {
      case "name":
        return {
          name: "Dog Name",
          value: dog[key],
        };
      case "breed":
        return {
          name: "Dog Breed",
          value: dog[key].split(";").join(", ").slice(0, -2),
        };
      case "age":
        return {
          name: "Age",
          value: dog[key]
            .split(";")
            .map((val, idx) => (idx === 0 ? val + " years, " : val + " months"))
            .join(""),
        };
      case "gender":
        return {
          name: "Gender",
          value: c(dog[key]),
        };
      case "neutered":
        return {
          name: "Neutered or Spayed",
          value: dog[key] ? "Yes" : "No",
        };
      case "weight":
        return {
          name: "Dog Weight in KG",
          value: dog[key] + " kg",
        };
      case "body_condition":
        return {
          name: "Body Condition",
          value: c(dog[key]),
        };
      case "activity":
        return {
          name: "Activity Level",
          value: c(dog[key]),
        };
      case "preferred_flavour":
        return {
          name: "Preferred Flavour",
          value: c(dog[key]),
        };
      case "health":
        return { name: "Health Issues", value: dog[key] || "None" };

      default:
        return { name: null, value: null };
    }
  };

  const dogDatatable = () => {
    const dogValues = Object.keys(dog)
      .filter((key) => key !== "preferred_flavour")
      .map((key) => ({
        name: formatValues(key).name,
        value: formatValues(key).value,
      }))
      .filter((item) => item.name);

    return (
      <>
        <p>
          Want to update your dog information?{" "}
          <Link
            to={{
              pathname: "/form",
              state: { dog, user },
            }}
          >
            This will probably change your recipe.
          </Link>
        </p>
        <hr></hr>
        {dogValues.map((val) => (
          <>
            <div className="details-datatable">
              <p className="p-shrinked" style={{ color: "#5f5f5f" }}>
                {val.name}
              </p>
              <p className="p-shrinked" style={{ fontWeight: "500" }}>
                {val.value}
              </p>
            </div>
            <hr></hr>
          </>
        ))}
      </>
    );
  };

  return (
    <>
      <Accordion
        margin="0"
        accordions={[
          {
            title: "1. Recipe",
            customContent: (
              <>
                <Banner
                  title={`${name}'s Daily Plan`}
                  description={`Give ${name} ${parseFloat(daily_grams).toFixed(
                    1
                  )}g of his tailor-made blend every day to meet 100% of his nutritional needs and daily calories`}
                  margin="0 0 60px 0"
                />

                <section class="page-section" style={{ padding: "0" }}>
                  <div
                    class="row mb-80"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div class="col-sm-6 mb-20 nutrition-bar">
                      <div className="triangle-down" />
                      <p>
                        {parseFloat(daily_grams).toFixed(1)}g /{" "}
                        {parseFloat(daily_kcal).toFixed(1)}kcal
                      </p>
                    </div>
                    <p>Dry Food</p>
                    <h3 className="mb-10">Composition & Ingredients</h3>
                    <p style={{ textAlign: "center" }}>{composition}</p>
                    <Underline marginTop="30px" marginBottom="0" />
                    <h3 className="mb-10">Analytical Constituents</h3>
                    <p style={{ textAlign: "center" }}>
                      {constituents
                        .split(",")
                        .map((section) => section.split(";").join(" "))
                        .join(", ")}
                    </p>
                    <Underline marginTop="30px" marginBottom="0" />

                    <h3 className="mb-10">Nutritional Additives</h3>
                    <p style={{ textAlign: "center" }}>
                      {vitamins
                        .split(",")
                        .map((section) => section.split(";").join(" "))
                        .join(", ")}
                    </p>
                    <Underline marginTop="30px" marginBottom="0" />

                    <h3 className="mb-10">Trace Elements</h3>
                    <p style={{ textAlign: "center", padding: "0 20px" }}>
                      {traceElements}
                    </p>
                  </div>
                </section>
              </>
            ),
          },
          {
            title: "2. Dog Information",
            customContent: dogDatatable(),
          },
        ]}
      />
    </>
  );
};

export default RecipeTab;
