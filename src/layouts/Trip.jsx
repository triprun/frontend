import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import { AdminNavbar } from "components/Navbars/AdminNavbar.jsx";
import { AdminFooter } from "components/Footers/AdminFooter.jsx";
import { Sidebar } from "components/Sidebar/Sidebar.jsx";
import TripInner from "views/Trip.jsx";

import routes from "routes.js";

export const Trip = (props) => {
  useEffect(() => {
    document.body.scrollTop = 0;
  }, []);

  const getRoutes = routes => routes.map((prop, key) => {
    return prop.layout !== "/in" || prop.inner ? null : (
      <Route
        path={prop.layout + prop.path}
        component={prop.component}
        key={key}
      />
    );
  });

  return (
    <>
      <Sidebar {...props} routes={routes} />
      <div className="main-content">
        <AdminNavbar
          {...props}
          brandText="Trip Overview"
        />
        <Switch>{getRoutes(routes)}</Switch>
        <TripInner {...props} />
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};
