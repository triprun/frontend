import React from "react";

// reactstrap components
import { Container, Col } from "reactstrap";

import { Row } from "components/Micro/Row.jsx";

export const RecommendedHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          height: "370px",
          backgroundImage:
            "url(https://www.hdri-hub.com/media/k2/galleries/862/loc00184-17-detail.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-3" />
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
