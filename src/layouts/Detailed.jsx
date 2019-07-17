import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import { Navbar } from "components/Navbars/Navbar.jsx";
import { Footer } from "components/Footer/Footer.jsx";
import { Sidebar } from "components/Sidebar/Sidebar.jsx";
import { DetailedInner } from "views/Detailed.jsx";

import routes from "routes.js";

export const Detailed = (props) => {

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
        <Navbar
          {...props}
          brandText="Detailed Overview"
        />
        <Switch>{getRoutes(routes)}</Switch>
        <DetailedInner {...props} />
        <Container fluid>
          <Footer />
        </Container>
      </div>
    </>
  );
};
