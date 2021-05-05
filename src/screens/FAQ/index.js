import React from "react";
import { HeaderBackground, Accordion } from "../../components";

function FAQ() {
  return (
    <div className="page" id="top">
      <HeaderBackground nobackground />
      {/* <ImageBanner
        title="Questions"
        description="We answered a list of frequently asked questions below."
        margin="-120px 0 0 0"
        button={{
          text: "Any other questions?",
          to: "/contact"
        }}
      />

      <BackgroundImageBanner className="mb-0" /> */}
      {/* <Banner
        title="Frequent Questions"
        description="Perhaps your question is already answered below."
      /> */}
      <div class="row mb-60">
        <div class="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 align-center">
          <h1 class="font-alt mb-20 mb-sm-40">Having Trouble?</h1>
          {/* <Underline gradient /> */}
          <div class="align-center">
            <p>We answered some of your questions below</p>
          </div>
        </div>
      </div>
      <section className="page-section" style={{ paddingTop: "0" }}>
        <Accordion
          // margin="0"
          accordions={[
            {
              title: "Can I adjust the information for my dog?",
              content: (
                <p>
                  Yes, you can update your dogs' information anytime in your
                  profile. It's really important to keep your dogs profile
                  updated in order for us to send the right food. We`ll send you
                  an email every month for you to update your dog's profile.
                </p>
              ),
              customContent: "",
            },
            {
              title: "How do you calculate the amount and choose the food?",
              content: (
                <p>
                  We have developed a mathematical algorithm that calculates the
                  ideal daily calorie requirement and selects the ideal food
                  recipe, based upon the information you gave us.
                </p>
              ),
              customContent: "",
            },
            {
              title: "How can I contact PETZY?",
              content: (
                <p>
                  We are in the office from Monday to Friday from 9:00 - 18:00.
                  You can always reach one of us through the LiveChat or
                  alternatively just write us an email to info@petzy.ch
                </p>
              ),
              customContent: "",
            },
            {
              title: "Can I have more than one dog?",
              content: (
                <p>
                  At the moment we don't have the feature to add multiple dogs.
                  We are always working and developing our service in order to
                  offer you the best service possible.
                </p>
              ),
              customContent: "",
            },
            {
              title: "How do I change my personal info?",
              content: (
                <p>
                  Your personal information can be updated within your profile
                  under Personal Information.
                </p>
              ),
              customContent: "",
            },
            {
              title: "What is PETZY?",
              content: (
                <p>
                  PETZY is a platform designed to change your daily life with
                  your dog. We have invented an algorithm which calculates and
                  defines the ideal food for your dog, based on his personal
                  properties.
                </p>
              ),
              customContent: "",
            },
          ]}
        />
      </section>
    </div>
  );
}

export default FAQ;
