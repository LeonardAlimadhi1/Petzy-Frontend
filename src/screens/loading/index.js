import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Loader } from "../../components";
import { HTTPfetch } from "../../api";

const Loading = ({ location }) => {
  const [found, setFound] = useState(null);

  const formData = location.state.form;
  const { isPredefined } = location.state;
  const { name } = formData.dog;

  const delay = (cb) => setTimeout(cb, 5000);
  const isAnyEmpty = (...objs) =>
    objs.some((obj) => obj && Object.keys(obj).length === 0);

  useEffect(() => {
    const fetchData = async () => {
      if (isAnyEmpty(location.state.form)) return;
      let newFormData = { ...formData };

      try {
        const { email, password, dog, isLead = false } = newFormData;
        const newData = {
          email,
          password,
          ...dog,
        };
        let product;

        if (!isLead) {
          const leadUser = await HTTPfetch(`lead`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              ...newData,
              gender: dog.sex,
              breed: JSON.stringify(dog.breed),
            }),
          });

          product = await HTTPfetch(`recipe`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(formData),
          });
        } else {
          newFormData.dog.breed = formData.breed;
          newFormData.dog.sex = formData.dog.gender;
          product = await HTTPfetch(`recipe`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newFormData),
          });
        }

        delay(() => setFound(product));
      } catch (e) {
        console.log(e);
        delay(() => setFound({}));
      }
    };
    fetchData();
  }, []);

  const renderResult = () => {
    return (
      <Redirect
        to={{
          pathname: "result",
          state: { ...found, ...formData, isPredefined },
        }}
      />
    );
  };

  const renderNotAllowed = () => (
    <Redirect
      to={{
        pathname: "no-result",
        state: {
          description: "But you are allowed to look at this cute dog instead.",
        },
      }}
    />
  );

  const renderCorrectScreen = () => {
    if (isAnyEmpty(formData, found)) return renderNotAllowed();
    if (found) return renderResult();
    return <Loader name={name} />;
  };

  return renderCorrectScreen();
};

export default Loading;
