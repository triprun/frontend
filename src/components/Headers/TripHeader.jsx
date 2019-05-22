import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import FlagIcon from "components/FlagIcon/FlagIcon.jsx";

export const TripHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "370px",
          backgroundImage:
            "url(" + require("assets/img/theme/map2.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-6" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="12">
              <h1 className="text-white ml-1 mb--2">Eurotrip</h1>
              <small className="ml-1 text-light">Jun-Dec 2019</small>
              <Row className="ml-1 mt-4">
                <p><FlagIcon className="rounded mr-2" code="es" size="3x" squared={false} /></p>
                <p className="text-white mr-2 mt-2"> – <i class="fas fa-plane"></i> – </p>
                <p><FlagIcon className="rounded mr-2" code="it" size="3x" squared={false} /></p>
                <p className="text-white mr-2 mt-2"> – <i className="fas fa-car"></i> – </p>
                <p><FlagIcon className="rounded" code="fr" size="3x" squared={false} /></p>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
