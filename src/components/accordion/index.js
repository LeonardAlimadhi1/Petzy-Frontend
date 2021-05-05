import React, { useState } from "react";
import "./styles.css";

const Accordion = ({ accordions, margin }) => {
  const [activeAccordion, setActiveAccordion] = useState(-1);
  const toggleAccordion = idx => setActiveAccordion(isActive(idx) ? -1 : idx);
  const isActive = idx => idx === activeAccordion;

  return (
    <div
      className="app accordion-wrapper"
      id="app"
      style={{ margin: margin || "50px 100px" }}
    >
      <div className="accordions">
        {accordions.map((accordion, idx) => (
          <section className="accordions__accordion">
            <div className="accordions__header">
              <div className="accordions__container">
                <div className="accordions__title">{accordion.title}</div>
                <button
                  onClick={() => toggleAccordion(idx)}
                  className={`accordions__button${
                    isActive(idx) ? "--active" : ""
                  }`}
                >
                  <div className="accordions__icon"> &#x2039; </div>
                </button>
              </div>
            </div>
            <div className="accordions__container">
              <div
                className={`accordions__content${
                  isActive(idx) ? "--expanded" : ""
                }`}
              >
                {accordion.content}
                {accordion.customContent}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
