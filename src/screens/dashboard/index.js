import React, { useState, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import Modal from "react-responsive-modal";
import { Link } from "react-router-dom";

import { RecipeTab, ProfileTab, SecurityTab } from "./tabs";

import { HTTPfetch, logout } from "../../api";
import { adminTabs } from "./tabs/constants";

import { HeaderBackground, Banner } from "../../components";
import "./styles.css";

const Dashboard = (props) => {
  const [inputs, setInputs] = useState({});
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const [loading, setLoading] = useState(true);

  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const { addToast } = useToasts();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await HTTPfetch("user");
        const dog = await HTTPfetch("dog");

        setInputs({
          ...inputs,
          user: { ...user["data"] },
          recipe: { ...dog["data"]["recipe"] },
          dog: { ...dog["data"]["dog"] },
        });
        setLoading(false);
      } catch (e) {
        logout();
        props.history.push("login");
      }
    };
    fetchData();
  }, []);

  const generateForm = (name) => {
    switch (name) {
      case "recipe":
        return (
          <RecipeTab
            dog={inputs["dog"]}
            recipe={inputs["recipe"]}
            user={inputs.user}
          />
        );

      case "security":
        return <SecurityTab />;

      case "user":
        return <ProfileTab defaultInputs={inputs.user} />;

      default:
        return;
    }
  };

  return (
    <div classNameName="page" id="top">
      <section className="page-section pb-0">
        <HeaderBackground absolute nobackground />
        {!loading ? (
          <Banner
            title={`Welcome ${inputs.user && inputs.user.full_name}`}
            // description="Manage your profile, dog information."
            margin="-40px 0 0 0"
            padding="80px 0 40px 0"
          />
        ) : (
          ""
        )}
      </section>

      <section class="page-section" style={{ padding: "0" }}>
        <div class="container relative">
          <div class="new-tabs">
            {adminTabs.map((tab, idx) => (
              <input
                type="radio"
                id={`tab${idx + 1}`}
                name="tab-control"
                checked={activeTabIdx === idx}
              />
            ))}

            <ul>
              {adminTabs.map(({ name, value, icon }, idx) => (
                <li
                  title={name}
                  onClick={() => {
                    setActiveTab(value);
                    setActiveTabIdx(idx);
                  }}
                >
                  <label for={`tab${idx + 1}`} role="button">
                    {icon}
                    <br />
                    <span>{name}</span>
                  </label>
                </li>
              ))}
            </ul>

            <div class="slider">
              <div class="indicator"></div>
            </div>
            <div class="content">
              {adminTabs.map(({ name, value }) => (
                <section>
                  {loading ? (
                    <div class="lds-ring">
                      <div />
                      <div />
                      <div />
                      <div />
                    </div>
                  ) : (
                    generateForm(value)
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
