import React from "react";
const fieldInputs = {
  user: [
    { name: "email", inputType: "email", rule: "required|email" },
    { name: "full_name", inputType: "text", rule: "required|alpha_space" },
    { name: "phone", inputType: "tel", rule: "required|phone" },
  ],
  dog: [
    { name: "name", inputType: "text", rule: "required|alpha_space" },
    { name: "breed", inputType: "text", rule: "required|alpha_space" },
    {
      name: "health",
      inputType: "text",
      rule: "required|alpha_num_dash_space",
    },
  ],
  security: [
    { name: "new_password", inputType: "password", rule: "required|min:8" },
    { name: "confirm_password", inputType: "password", rule: "required|min:8" },
  ],
  recipe: [
    { name: "age", inputType: "text", rule: "required|numeric" },
    {
      name: "gender",
      inputType: "radio",
      rule: "required|in:male,female",
      data: [
        { value: "male", label: "male" },
        { value: "female", label: "female" },
      ],
    },
    {
      name: "neutered",
      inputType: "radio",
      rule: "required|in:1,0",
      data: [
        { value: 1, label: "yes" },
        { value: 0, label: "no" },
      ],
      options: [
        { label: "yes", value: 1 },
        { label: "no", value: 0 },
      ],
      className: "desc",
    },
    { name: "weight", inputType: "text", rule: "required|numeric" },
    {
      name: "body_condition",
      inputType: "picker",
      rule: "required|in:obese,overweight,ideal,underweight,really underweight",
      data: [
        "obese",
        "overweight",
        "ideal",
        "underweight",
        "really underweight",
      ],
      type: "dogs",
    },
    {
      name: "activity",
      inputType: "picker",
      rule: "required|in:intense activity,active,leisurely,less active",
      data: ["intense activity", "active", "leisurely", "less active"],
      descriptions: [
        "your dog is intensely active",
        "your dog is active",
        "your dog is leisurely active",
        "your dog is less active",
      ],
    },
  ],
};
const adminTabs = [
  {
    name: "Recipe",
    value: "recipe",
    icon: (
      <svg viewBox="0 0 310.883 310.883">
        <path
          d="M299.459,174.267c0,0-16.433-71.773-16.707-72.356c-3.429-10.694-17.078-19.279-40.725-25.565
	c-23.243-6.181-53.993-9.584-86.586-9.584c-32.592,0-63.343,3.403-86.586,9.584c-23.657,6.29-37.308,14.879-40.729,25.58
	c-0.272,0.578-16.702,72.342-16.702,72.342C4.778,176.576,0,182.879,0,190.312c0,18.79,17.893,33.075,53.18,42.458
	c27.533,7.32,63.85,11.353,102.261,11.353c0.002,0,0.004,0,0.006,0c38.41,0,74.724-4.031,102.255-11.352
	c35.287-9.383,53.18-23.668,53.18-42.459C310.883,182.879,306.105,176.576,299.459,174.267z M211.452,189.198
	c0,7.987-6.498,14.486-14.485,14.486c-7.755,0-14.107-6.124-14.471-13.79h-54.11c-0.365,7.666-6.715,13.79-14.469,13.79
	c-7.988,0-14.486-6.499-14.486-14.486c0-3.783,1.458-7.232,3.842-9.815c-2.384-2.583-3.842-6.032-3.842-9.815
	c0-7.987,6.499-14.486,14.486-14.486c7.754,0,14.104,6.124,14.469,13.79h54.11c0.364-7.666,6.716-13.79,14.471-13.79
	c7.987,0,14.485,6.499,14.485,14.486c0,3.783-1.458,7.232-3.842,9.815C209.994,181.966,211.452,185.415,211.452,189.198z
	 M235.357,120c-21.545,5.448-49.926,8.449-79.916,8.449c-29.99,0-58.371-3.001-79.916-8.449
	c-20.722-5.24-28.012-10.998-29.796-13.382c1.8-2.425,9.104-8.177,29.8-13.409c21.544-5.448,49.924-8.448,79.912-8.448
	c29.987,0,58.367,3,79.911,8.448c20.654,5.223,27.97,10.961,29.789,13.395C263.329,109.033,256.023,114.773,235.357,120z"
        />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    ),
  },
  {
    name: "Profile",
    value: "user",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
      </svg>
    ),
  },

  {
    name: "Security",
    value: "security",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10H20C20,13.32 17.32,16 14,16A6,6 0 0,1 8,10A6,6 0 0,1 14,4C14.43,4 14.86,4.05 15.27,4.14L16.88,2.54C15.96,2.18 15,2 14,2M20.59,3.58L14,10.17L11.62,7.79L10.21,9.21L14,13L22,5M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82Z" />
      </svg>
    ),
  },
];

export { fieldInputs, adminTabs };
