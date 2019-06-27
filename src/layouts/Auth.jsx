import React from "react";
import { Route, Switch } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import { AuthNavbar } from "components/Navbars/AuthNavbar.jsx";
import { Footer } from "components/Footer/Footer.jsx";

import routes from "routes.js";

export const Auth = () => {
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
      <div className="main-content">
        <AuthNavbar />
        <div className="header bg-gradient-info py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Welcome to Triprun!</h1>
                  <p className="text-lead text-light">
                    Please log in to continue planning your trips
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        {/* Page content */}
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Switch>{getRoutes(routes)}</Switch>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}
