import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";

import PrivateRoute from "./PrivateRoute";
import {
  LandingPage,
  Login,
  Team,
  Contact,
  NotFound,
  Form,
  Result,
  FAQ,
  Success,
  Loading,
  Dashboard,
  Error,
  TermsConditions,
} from "../screens";

import { Header, Footer, ScrollToTop } from "../components";

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/team" component={Team} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={FAQ} />

          <Route path="/terms" component={TermsConditions} />
          <Route path="/form" component={Form} />
          <Route path="/result" component={Result} />

          <Route path="/login" component={Login} />
          <Route path="/loading" component={Loading} />
          <Route path="/no-result" component={Error} />
          <Route path="/success" component={Success} />

          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

const CustomFallback = ({ componentStack, error }) => <Error />;

const withErrorBoundaryRouter = withErrorBoundary(
  AppRouter,
  CustomFallback,
  (error, componentStack) => {
    // no Sentry so send error as email
    console.log(error);
  }
);

export default withErrorBoundaryRouter;
