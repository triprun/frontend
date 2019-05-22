import React from "react";
import { Route, Switch } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import { AdminNavbar } from "components/Navbars/AdminNavbar.jsx";
import { AdminFooter } from "components/Footers/AdminFooter.jsx";
import { Sidebar } from "components/Sidebar/Sidebar.jsx";

import routes from "routes.js";

export const Admin = (props) => {
  const getRoutes = routes => routes.map((prop, key) => {
    return prop.layout !== "/in" || prop.inner ? null : (
      <Route
        path={prop.layout + prop.path}
        component={prop.component}
        key={key}
      />
    );
  });

  const getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      <Sidebar {...props} routes={routes} />
      <div className="main-content">
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>{getRoutes(routes)}</Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};
