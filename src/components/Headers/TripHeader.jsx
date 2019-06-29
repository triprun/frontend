import React from "react";

// reactstrap components
import { Container, Col } from "reactstrap";

import FlagIcon from "components/FlagIcon/FlagIcon.jsx";

import { Row } from "components/Micro/Row.jsx";

export const TripHeader = (props) => {

  const prepIcon = (num) => {
    switch(num) {
      case 1:
      return (<i className="fas fa-car"></i>);
      case 2:
      return (<i className="fas fa-train"></i>);
      case 3:
      return (<i className="fas fa-plane"></i>);
      default: return (<i class="fas fa-walking"></i>);
    }
  }

  const visualizeFlags = (props) => {
    return props.countries.map(country => {
      if(country.arriveWith !== 0) return (
        <>
          <p className="text-white mr-2 mt-2"> – { prepIcon(country.arriveWith) } – </p>
          <p onClick={ () => { props.setter(country) } } style={{ cursor: 'pointer' }}><FlagIcon className="rounded mr-2" code={country.country} size="3x" squared={false} /></p>
        </>
      );
      return (<p onClick={ () => { props.setter(country) } } style={{ cursor: 'pointer' }}><FlagIcon className="rounded mr-2" code={country.country} size="3x" squared={false} /></p>);
    });
  };

  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: '370px',
          maxHeight: '370px',
          background: `url(${props.background})`,
          backgroundSize: 'cover'
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-6" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="12">
              <h1 className="text-white ml-1 mb--2">{props.name}</h1>
              <small className="ml-1 text-light">{props.dates}</small>
              <Row className="ml-1 mt-4">
                { visualizeFlags(props) }
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
