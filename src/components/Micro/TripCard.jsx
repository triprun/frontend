import React from 'react';
import { NavLink } from "react-router-dom";
import { Col, Row, Card } from 'reactstrap';
import styled from 'styled-components';

import FlagIcon from "components/FlagIcon/FlagIcon.jsx";

const CardBack = styled(Card)`
  position: relative;
  cursor: pointer;
  margin-bottom: 60px;
  height: 200px;
  min-width: 300px;
  background-blend-mode: overlay;
  background: ${p => `url(${p.background})`}, linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4));
  backgroundSize: 'cover';
`;

const CardFront = styled(Card)`
  width: 90%;
  border-radius: $border-radius;
  @extend .shadow;
  padding: 15px;
  padding-bottom: 0;
  transform: translate(-50%, 77%);
  position: absolute;
  left: 50%;
  transition: $transition-base;

  &:hover {
    transform: translate(-50%, 72%);
  }
`;

const ProfileImage = styled.div`
  position: relative;

  img {
    max-width: 50px;
    border-radius: $border-radius;
    transform: translate(-50%, -80%);
    position: absolute;
    left: 50%;
    transition: $transition-base;

    &:hover {
      transform: translate(-50%, -83%);
    }
  }
`;

const TripName = styled.h3`
  width: 90%;
  color: black;
`;

const visualizeCompanions = (companions) => {
  return companions.map(companion => {
    return (
      <Col className="order-lg-1 col-2 col-md-1">
        <ProfileImage>
          <NavLink to={companion.href}>
            <img alt={companion.fullName} className="rounded-circle" src={companion.avatar} />
          </NavLink>
        </ProfileImage>
      </Col>
    );
  });
};

const drawFlags = (places) => {
  return places.map(place => {
    if(places.length === 1) return (
      <>
        <p>
          <FlagIcon
            className="rounded shadow mr-2"
            code={place.country}
            size="2x"
            squared={false}
          />
        </p>
        <p style={{ color: 'gray' }}>{place.cities[0]}</p>
      </>
    );
    return (
      <p>
        <FlagIcon
          className="rounded shadow mr-2"
          code={place.country}
          size="2x"
          squared={false}
        />
      </p>
    );
  });
};

export const TripCard = ({ trip }) => {
  return (<Col className="col-12 col-xl-4 mr-0 mr-md-0 mb-5 mb-xl-0">
    <CardBack className="shadow" background={ trip.background }>
      <NavLink to={ trip.href }>
        <CardFront>
          <Row className="justify-content-center">
            { visualizeCompanions(trip.companions) }
          </Row>
          <Row className="mt-4 ml-1">
            <TripName>{trip.name}</TripName>
            { trip.status >= 0 && <i className="fas fa-bell fa-lg mt--4">{ trip.notification && <sup><small><i className="fas fa-circle fa-xs ml--2 text-red" /></small></sup> }</i> }
          </Row>
          { trip.date !== 0 && <Row className="mt--2 ml-1"><small style={{ color: 'gray' }}>{trip.date}</small></Row> }
          <Row className="ml-1 mt-3">
            { drawFlags(trip.places) }
          </Row>
          { trip.status >= 0 && <h4 className="text-right mt--3"><i className="fas fa-paperclip mr-3 text-gray" /><i className="fas fa-comments text-blue" /></h4> }
        </CardFront>
      </NavLink>
    </CardBack>
  </Col>);
}
