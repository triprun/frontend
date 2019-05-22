import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";

import { Admin } from "./layouts/Admin.jsx";
import { Trip } from "./layouts/Trip.jsx";
import { Auth } from "./layouts/Auth.jsx";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/in/trip/:trip_id" render={props => <Trip {...props} />} />
        <Route path="/in" render={props => <Admin {...props} />} />
        <Route path="/auth" component={Auth} />
        <Redirect from="/" to="/in/hots" />
      </Switch>
    </Router>
  );
};
