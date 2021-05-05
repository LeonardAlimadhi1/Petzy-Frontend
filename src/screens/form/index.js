import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { Link } from "react-router-dom";
import Modal from "react-responsive-modal";

import { HTTPfetch } from "../../api";
import { get } from "../../utils";
import dogBreeds from "./utils/dog breeds";
import data from "./utils/data";

import {
  TextInput,
  NumberInput,
  RadioInput,
  Picker,
  Progress,
  Editor,
} from "./components";

import { HeaderBackground, ImageBanner, Banner } from "../../components";

const sections = [
  "email",
  "password",
  "name",
  "breed", // crossbreed
  "age",
  "sex", // male, female
  "neutered", // yes, no
  "weight", //kg
  "body_condition", // obese, overweight, ideal, underweight, really underweight
  "activity", // intense active, active, leisure, less active
  "health",
  "finish",
];

const validate = async (value, section, isPredefined, setModalOpen) => {
  let validation = true;

  if (value.length === 0 && section !== "health")
    validation = "Please fill the input!";
  else
    switch (section) {
      case "email":
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(value)) validation = "Email invalid";
        else {
          validation = await HTTPfetch(`email-taken`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: value }),
          });
          validation =
            validation && !isPredefined ? (
              <>
                <span>Sorry! That email is taken</span>
                <br></br>
                <Link
                  to="/login"
                  style={{ marginTop: "10px" }}
                  className="btn btn-mod btn-medium btn-round"
                >
                  Already Registered? Login Here
                </Link>
              </>
            ) : (
              true
            );
        }

        break;

      case "password":
        if (!value.length) validation = "Please, add a password";
        else if (value.length < 6)
          validation = "Password must be longer than 6 characters";
        break;

      case "breed":
        const { crossbreed, breed1, breed2, breed3 } = value;

        if (!breed1.length) validation = "Please choose a breed";
        else if (!dogBreeds.includes(breed1))
          validation = "Please select one of the breeds from the list";
        else if (crossbreed) {
          if (!breed2.length) validation = "Please choose the second breed";
          else if (
            !dogBreeds.includes(breed2) ||
            (breed3 && !dogBreeds.includes(breed2))
          )
            validation = "Please select one of the breeds from the list";
        }

        break;

      case "age":
        const { years, months, birthday } = value;

        if (years == 0 && months == 0 && !!!birthday)
          validation = "Please choose the age of your dog";
        else if (years > 40 || months > 12)
          validation = "Hmm.. that doesn't seem right";
        else if (years == 0 && months < 8)
          validation =
            "Sorry! Your puppy is too small. Plase come back in a few months!";

        break;

      case "weight":
        if (value === 0) validation = "Please enter a valid weight";
        break;

      case "health":
        if (value === "pancreatitis") {
          validation = "  ";
          setModalOpen(true);
        }
        break;

      default:
        break;
    }

  return validation;
};

const Sections = ({
  currentSection,
  values,
  setValues,
  onNext,
  setCurrentSection,
  error,
  history: { push },
  setIsDone,
  isPredefined,
  setWeightRecommandationModal,
  setIdealWeight,
}) => {
  const print = [];

  const isCurrent = (section) => (section === currentSection ? "current" : "");

  const onChange = (section, value, attribute = false) => {
    const newValues = { ...values };
    const newValue =
      typeof value === "object" && attribute !== "birthday"
        ? value.target.value
        : value;

    if (attribute) newValues[section][attribute] = newValue;
    else newValues[section] = newValue;

    setValues(newValues);
  };

  const onClear = (section, id) => onChange(section, "", id);

  const findEstimate = async (setWeightRecommandationModal) => {
    // make an API request to get ideal weight of the dog
    try {
      const idealWeight = await HTTPfetch(`ideal-weight`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...values }),
      });
      setIdealWeight(idealWeight);
      setWeightRecommandationModal(true);
    } catch (e) {
      setIdealWeight(0);
    }
  };

  const addSection = (section, children) => {
    print.push(
      React.createElement(
        "div",
        { className: "section " + isCurrent(section), key: section },
        ...children
      )
    );
  };

  sections.forEach((section) => {
    const config = {
      section,
      onKeyPress: (e) => {
        if (e.key === "Enter") {
          e.target.blur();
          onNext();
        }
      },
      className: isCurrent(section),
      onChange: (value) => onChange(section, value),
      value: values[section],
    };

    if (section !== "finish") config.onClear = onClear;

    let children = [];

    switch (section) {
      case "email":
        children = [
          <h1>Let's start with your email</h1>,
          <div className="desc">
            Your email address is all we need to get your account set-up
          </div>,
          <TextInput
            type="email"
            placeholder="Please enter your email"
            disabled={isPredefined}
            style={{ pointerEvents: isPredefined ? "none" : "auto" }}
            {...config}
          />,
        ];
        break;

      case "password":
        children = [
          <h1>Create a password for your account</h1>,

          <TextInput
            {...config}
            type="password"
            placeholder="Please enter the password"
          />,
        ];
        break;

      case "name":
        children = [
          <h1>What is your dog called?</h1>,
          // <div className="desc"></div>,

          <TextInput
            {...config}
            type="text"
            placeholder="Please enter the name of your dog"
          />,
        ];
        break;

      case "breed":
        children = [
          <h1>What breed is {values.name}?</h1>,
          <div className="desc">
            If we know the breed, we can make sure {values.name}’s unique blend
            contains all the right nutrients.
          </div>,
          <RadioInput
            className={isCurrent(section)}
            options={[
              { value: false, label: "Single Breed" },
              { value: true, label: "Crossbreed" },
            ]}
            value={config.value.crossbreed}
            onChange={(value) => onChange(section, value, "crossbreed")}
          />,
          <TextInput
            {...config}
            id="breed1"
            list="breeds"
            value={config.value.breed1}
            onChange={(value) => onChange(section, value, "breed1")}
            placeholder="Please enter the breed of your dog"
          />,
          values.breed.crossbreed && (
            <TextInput
              {...config}
              id="breed2"
              list="breeds"
              onChange={(value) => onChange(section, value, "breed2")}
              value={config.value.breed2}
              placeholder="Second Breed"
            />
          ),
          <datalist id="breeds">
            {dogBreeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </datalist>,
        ];
        break;

      case "age":
        const { birthday, years, months, calendarOpen } = config.value;
        children = [
          <h1>How old is {values.name}?</h1>,
          <div className="desc hidden-xs">
            Dogs need different types and quantities of food as they grow up,
            and grow old.
          </div>,
          <div className="age-container">
            <NumberInput
              label="Years"
              min="0"
              max="40"
              {...config}
              value={years}
              onChange={(value) => onChange(section, value, "years")}
            />
            <div style={{ width: "20px" }}></div>
            <NumberInput
              label="Months"
              min="0"
              max="12"
              {...config}
              onChange={(value) => onChange(section, value, "months")}
              value={months}
            />
          </div>,
          <div className="calendar">
            <span style={{ fontSize: "1.2em", margin: "20px 0 20px 0" }}>
              OR
            </span>
            <div
              className={`calendar-toggle ${calendarOpen ? "open" : ""} ${
                !!birthday && "has-input"
              }`}
              onClick={() => onChange(section, !calendarOpen, "calendarOpen")}
            >
              {birthday ? (
                <div>{moment(birthday).format("ll")}</div>
              ) : (
                <span className="far fa-calendar" />
              )}
            </div>
            <Calendar
              {...config}
              className={`${isCurrent(section)} ${calendarOpen ? "open" : ""}`}
              value={birthday}
              maxDate={new Date()}
              onChange={(value) => {
                const age = moment.duration(moment().diff(value));
                const totalMonths = Math.floor(age.asMonths());
                const years = Math.floor(totalMonths / 12);
                const months = Math.floor(totalMonths - years * 12);

                onChange(section, value, "birthday");
                onChange(section, years, "years");
                onChange(section, months, "months");
                onChange(section, false, "calendarOpen");
              }}
            ></Calendar>
          </div>,
        ];
        break;

      case "sex":
        children = [
          <h1>Is {values.name} male or female?</h1>,
          <div className="desc">
            Male and female dogs have different nutritional needs.
          </div>,
          <RadioInput options={["male", "female"]} {...config} />,
        ];
        break;

      case "neutered":
        children = [
          <h1>
            Is {values.name} {values.sex === "male" ? "neutered" : "spayed"}?
          </h1>,
          <div className="desc">
            If {values.name} is {values.sex === "male" ? "neutered" : "spayed"},
            the metabolism could be working at a different pace{" "}
          </div>,
          <RadioInput
            options={[
              { label: "yes", value: true },
              { label: "no", value: false },
            ]}
            {...config}
          />,
        ];
        break;

      case "weight":
        children = [
          <h1>How many kg is {values.name}?</h1>,
          <div className="desc">
            Knowing the weight helps us get the amount of food and density of
            nutrients just right.<br></br>
            <span
              className="highlighted take-estimate"
              onClick={() => findEstimate(setWeightRecommandationModal)}
            >
              <i
                class="fa fa-question-circle"
                style={{ fontSize: "16px", marginRight: "2px" }}
              ></i>
              No idea? Take our estimate
            </span>
          </div>,
          <NumberInput
            placeholder="Please enter the weight of your dog"
            {...config}
          />,
        ];
        break;

      case "body_condition":
        children = [
          <h1>What is {values.name}'s body condition?</h1>,
          <div className="desc hidden-xs">
            Different body types need different amounts of nutrients
          </div>,
          <Picker
            options={[
              "really underweight",
              "underweight",
              "ideal",
              "overweight",
              "obese",
            ]}
            type="dogs"
            {...config}
            className={isCurrent(section) + " five"}
          />,
        ];
        break;

      case "activity":
        children = [
          <h1>How active is {values.name}?</h1>,
          <div className="desc">
            Different body types need different amounts of nutrients
          </div>,
          <RadioInput
            options={["less active", "leisurely", "active", "intense activity"]}
            descriptions={[
              "Your dog likes napping and resting. They might go for occasional walks on the lead, of no more than 30 minutes - or they don't go for regular walks. Their health doesn't allow much exercise.",
              "Your dog goes on daily walks of 30 minutes to 1 hour tops, and a few weekly walks of up to 2 hours - sometimes off the lead, which is exciting. At home, they're usually pottering around, and occasionally like to play.",
              "Your dog leads an active outdoor lifestyle. They go for daily walks of 1-2 hours, off the lead and running free. Lots of play at home too.",
              "Your dog is always on the go - daily walks of over 2 hours off the lead are just the start. Running, swimming, hiking and other regular high intensity activities such as agility and flyball provide a real workout.",
            ]}
            {...config}
          />,
        ];
        break;

      case "health":
        children = [
          <h1>Health Issues</h1>,
          <div className="desc">
            Does {values.name} have any of the health problems below?
          </div>,
          <RadioInput
            options={[
              "none",
              "joints",
              "skin & coat",
              "digestion",
              "pancreatitis",
            ]}
            value="none"
            {...config}
          />,
        ];
        break;

      case "finish":
        children = [
          <h1>Ready?</h1>,
          <div className="desc">
            Here is what you selected. Please double check for any mistakes.
          </div>,
          <Editor
            {...config}
            setCurrentSection={setCurrentSection}
            values={values}
          ></Editor>,
          <a
            onClick={() => {
              setIsDone(true);

              setTimeout(() => {
                push({
                  pathname: "/loading",
                  state: {
                    form: {
                      email: values.email,
                      password: values.password,
                      dog: {
                        ...values,
                        age: values.age.years + ";" + values.age.months,
                      },
                    },
                    isPredefined,
                  },
                });
              }, 600);
            }}
            className="finish-button"
          >
            Show Me
          </a>,
        ];
        break;

      default:
        return;
    }

    children.push(<div className="error">{error}</div>);

    addSection(section, children);
  });

  return (
    <div
      className="container"
      style={{
        transform: `translateX(-${100 * sections.indexOf(currentSection)}vw)`,
      }}
    >
      {print}
    </div>
  );
};

const Form = ({ history, location }) => {
  const [currentSection, setCurrentSection] = useState(sections[0]);
  // const [currentSection, setCurrentSection] = useState("health");
  const [modalOpen, setModalOpen] = useState(false);
  const [weightRecommandationModal, setWeightRecommandationModal] = useState(
    false
  );
  const [idealWeight, setIdealWeight] = useState(0);

  const locationGetter = get(location);
  const user = locationGetter(["state", "user"]);
  const dog = locationGetter(["state", "dog"]);

  const dogGetter = get(dog);
  const userGetter = get(user);

  const [previousClicked, setPreviousClicked] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);
  const [error, setError] = useState(null);
  const [isDone, setIsDone] = useState(false);
  const [values, setValues] = useState({
    email: userGetter(["email"]) || "",
    name: dogGetter(["name"]) || "",
    password: userGetter(["password"]) || "",
    breed: {
      crossbreed: dogGetter(["breed"])
        ? dogGetter(["breed"]).split(";").length > 1 &&
          dogGetter(["breed"]).split(";")[1] !== ""
        : false,
      breed1:
        (dogGetter(["breed"]) && dogGetter(["breed"]).split(";")[0]) || "",
      breed2:
        (dogGetter(["breed"]) && dogGetter(["breed"]).split(";")[1]) || "",
      breed3:
        (dogGetter(["breed"]) && dogGetter(["breed"]).split(";")[2]) || "",
    },
    age: {
      calendarOpen: false,
      years: (dogGetter(["age"]) && dogGetter(["age"]).split(";")[0]) || 0,
      months: (dogGetter(["age"]) && dogGetter(["age"]).split(";")[1]) || 0,
      birthday: null,
    },
    sex: dogGetter(["gender"]) || "male",
    neutered: dogGetter(["neutered"]) || false,
    weight: dogGetter(["weight"]) || 0,
    body_condition: dogGetter(["body_condition"]) || "ideal",
    activity: dogGetter(["activity"]) || "leisurely",
    health: dogGetter(["health"]) || "none",
  });

  const currentIndex = sections.indexOf(currentSection);

  const onPrevious = () => {
    setError(null);

    const previousSection = sections[currentIndex - 1];

    currentIndex > 0 && setCurrentSection(previousSection);

    if (currentIndex >= 0) {
      setPreviousClicked(true);
      setTimeout(() => {
        setPreviousClicked(false);
      }, 300);
    }
  };

  const onNext = () => {
    validate(
      values[currentSection],
      currentSection,
      location.state,
      setModalOpen
    ).then((validation) => {
      if (validation !== true) {
        setError(validation);
      } else {
        setError(null);

        const nextSection = sections[currentIndex + 1];

        currentIndex < sections.length - 1 && setCurrentSection(nextSection);

        if (currentIndex < sections.length - 2) {
          setNextClicked(true);
          setTimeout(() => {
            setNextClicked(false);
          }, 300);
        }
      }
    });
  };

  const PreviousButton = (
    <button
      className={`previous ${previousClicked && "clicked"} ${
        sections.indexOf(currentSection) === sections.length - 1 && "last"
      } ${
        sections.indexOf(currentSection) === sections.length - 2 && "pre-last"
      }`}
      disabled={
        sections.indexOf(currentSection) === 0 ||
        sections.indexOf(currentSection) === sections.length - 1
      }
      onClick={onPrevious}
    >
      previous
    </button>
  );

  const NextButton = (
    <button
      className={`next ${nextClicked && "clicked"} ${
        sections.indexOf(currentSection) === sections.length - 1 && "last"
      } ${
        sections.indexOf(currentSection) === sections.length - 2 && "pre-last"
      }`}
      disabled={sections.indexOf(currentSection) === sections.length - 1}
      onClick={onNext}
    >
      next
    </button>
  );

  return (
    <div className="form-root">
      <HeaderBackground nobackground absolute />

      <div className="buttons hidden-xs">
        <div className="progress-buttons">
          <Progress
            isDone={isDone}
            sections={sections}
            current={currentIndex}
          />
        </div>
      </div>

      <Sections
        setIsDone={setIsDone}
        history={history}
        values={values}
        setValues={setValues}
        onNext={onNext}
        error={error}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        isPredefined={location.state}
        setWeightRecommandationModal={setWeightRecommandationModal}
        setIdealWeight={setIdealWeight}
      />

      <div className="buttons buttons-down">
        <div className="progress-buttons">
          {PreviousButton}
          {NextButton}
        </div>
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} center>
        <Banner
          title={`Sorry.`}
          margin="0"
          customContent={
            <div style={{ padding: "20px" }}>
              <p style={{ fontWeight: "600" }}>
                We cannot guarantee the safety of your dog with pancreatitis.
              </p>
              <br></br>
              <p>But we'll let you know as soon as we do.</p>
              <br></br>
              <button
                className="btn btn-mod btn-round btn-large"
                onClick={() => setModalOpen(false)}
              >
                I Understand
              </button>
            </div>
          }
        />
      </Modal>

      <Modal
        open={weightRecommandationModal}
        onClose={() => setWeightRecommandationModal(false)}
        center
      >
        <center style={{ padding: "40px" }}>
          <p>
            Based on the breed and age, we expect {values["name"]}'s weight to
            be
            <span className="highlighted">
              {" "}
              approximately {idealWeight} kg.
            </span>
          </p>
          <p>Sounds about right?</p>
          <br></br>
          <button
            className="btn btn-large btn-mod btn-round"
            onClick={() => {
              setValues({ ...values, weight: idealWeight });
              setWeightRecommandationModal(false);
            }}
          >
            Use Estimate
          </button>
        </center>
      </Modal>
    </div>
  );
};

export default Form;
