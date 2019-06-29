import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Card, CardHeader, CardBody } from 'reactstrap';
import styled from 'styled-components';

const CardBack = styled(Card)`
  position: relative;
  cursor: pointer;
  margin-top: 16px;
  margin-bottom: 16px;
  height: 170px;
  min-width: 300px;
  background-blend-mode: overlay;
  background: ${p => `url(${p.background})`}, linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4));
  background-size: cover;
`;

export const ShadowCard = ({ source, href, header, text }) => {
  return (<CardBack className="shadow" background={ source }>
    <NavLink to={ href }>
      <CardHeader className="bg-transparent">
        <Row className="align-items-center">
          <div className="col">
            <h6 className="text-uppercase text-secondary ls-1 mb-1">
              { header }
            </h6>
            <h2 className="mb-0 text-white">{ text }</h2>
          </div>
        </Row>
      </CardHeader>
      <CardBody>
      </CardBody>
    </NavLink>
  </CardBack>);
};
