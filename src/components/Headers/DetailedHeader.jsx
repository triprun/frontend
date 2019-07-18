import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
// reactstrap components
import { Container, Col, Row } from "reactstrap";

import styled from 'styled-components';

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

const Like = styled.div`
  cursor: pointer;
`;

export const DetailedHeader = (props) => {
  const [liked, like] = useState(false);

  const visualizeProfiles = (profiles) => {
    return profiles.map(profile => {
      return (
        <Col className="order-lg-1 col-2 col-md-1">
          <ProfileImage>
            <NavLink to={profile.href}>
              <img alt={profile.fullName} className="rounded-circle" src={profile.avatar} />
            </NavLink>
          </ProfileImage>
        </Col>
      );
    });
  };

  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          height: "400px",
          backgroundImage: `url(${ props.source })`,
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-dark opacity-5" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col className="col-12 col-md-10 col-lg-7 mt-6 mt-md-7">
              <h1 className="text-white mb--1">{ props.name }</h1>
              <span className="text-gray">{ props.continent }</span>
              <p className="mt-3 text-white">{ props.description }</p>
            </Col>
            <Col className="col-12 col-md-1 col-lg-3 ml-6 ml-md-8 mt-md-9">
              <Col className="col-12 mt-md-8">
                <Row>
                  <Row className="justify-content-center">
                    <Row className="mr-2 pt-5">
                      { visualizeProfiles(props.profiles) }
                    </Row>
                    <Col>
                      <p className="text-white mb--1 pt-2">Kira, Sam, Jessica</p>
                      <small className="text-gray">and 16 people like this</small>
                    </Col>
                  </Row>
                  <Like className="ml-5 mt-3">
                    <small onClick={ () => { like(!liked) } }>
                      { !liked && <i className="far fa-heart fa-2x text-white"></i> }
                      { liked && <i className="fas fa-heart fa-2x text-red"></i>}
                    </small>
                  </Like>
                </Row>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
