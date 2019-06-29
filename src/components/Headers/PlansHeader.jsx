import React from "react";

// reactstrap components
import { Button, Container, Col } from "reactstrap";

import { Row } from "components/Micro/Row.jsx";

export const PlansHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "370px",
          backgroundImage:
            "url(https://i.ibb.co/C0LyQ0m/map2.jpg)",
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
              <Button
                className="ml-3"
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
                size="md"
              >
                <i className="fas fa-plus-circle fa-lg mr-2" /> Add new trip
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PlansHeader;
