import React from "react";

// reactstrap components
import { Container, Col } from "reactstrap";

import { Row } from "components/Micro/Row.jsx";

export const UserHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "370px",
          backgroundImage:
            "url(https://i.ibb.co/gjXtpNH/map.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-6" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
