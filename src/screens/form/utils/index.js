import coefficients from "./coefficients";

/**
 *
 * @param {*} weight: uint
 * @param {*} age: uint
 * @param {*} activityCategory: [intense_active, active, leisure, less_active]
 * @param {*} weightCategory: [obese, overweight, ideal, underweight, really_underweight]
 *
 * Usage:
 *   import getCalorieCount from "xyz";
 *   import getCalorieCount from './index';
 *   const caloriesNeeded = getCalorieCount(11, "puppy", "active", "ideal")
 *
 */

export const getLabelFromAge = age => {
  if (isNaN(age)) age = parseInt(age);
  if (age <= 2) return "puppy";
  else if (age <= 5) return "junior";
  else if (age <= 10) return "adult";
  return "senior";
};

export const getCalorieCount = (
  weight,
  age,
  activityCategory,
  weightCategory
) => {
  const multiplicator =
    coefficients[getLabelFromAge(age)][activityCategory][weightCategory];
  const calorieCount = multiplicator * 70 * Math.pow(weight, 0.75) * 31;
  const kgCount = calorieCount * 0.00012959782 * 100;

  return {
    calorieCount,
    kgCount
  };
};

export const capitalize = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const capitalizeAll = string =>
  string &&
  typeof string === "string" &&
  string
    .split(" ")
    .map(word => (word.length > 1 ? capitalize(word) : word))
    .join(" ");
