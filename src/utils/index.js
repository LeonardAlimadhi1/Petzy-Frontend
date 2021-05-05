import React, { useState } from "react";

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const capitalizeAll = string =>
  string &&
  string
    .split(" ")
    .map(word => (word.length > 1 ? capitalize(word) : word))
    .join(" ");

const get = obj => prop =>
  prop.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), obj);

const useForceUpdate = () => {
  const [value, set] = useState(true); //boolean state
  return () => set(value => !value); // toggle the state to force render
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "CHF"
}).format;

const calculateData = (amount, actual_amount, discount) => {
  const kgAmount = Math.ceil(actual_amount) / 100;
  const formattedAmount = formatter(amount);
  const discountedAmount = discount ? (amount * discount.percent_off) / 100 : 0;

  const subtotal = amount - discountedAmount;
  const formattedSubtotal = formatter(subtotal);

  const SHIPPING_FEE = 10;
  const formattedShippingFee = formatter(SHIPPING_FEE);

  const totalAmount = amount + SHIPPING_FEE - discountedAmount;
  const formattedTotalAmount = formatter(totalAmount);

  return {
    kgAmount,
    formattedAmount,
    formattedSubtotal,
    formattedShippingFee,
    formattedTotalAmount
  };
};

export {
  capitalize,
  capitalizeAll,
  get,
  calculateData,
  formatter,
  useForceUpdate
};
