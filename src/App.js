import React from "react";
import { ToastProvider } from "react-toast-notifications";

import Router from "./router";
require("dotenv").config();

const App = () => {
  return (
    <ToastProvider placement="bottom-right">
      <Router />
    </ToastProvider>
  );
};

export default App;
