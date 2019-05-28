import React, { useState } from "react";

import { NavLink } from "react-router-dom";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col
} from "reactstrap";

import FlagIcon from "components/FlagIcon/FlagIcon.jsx";

// core components
import PlansHeader from "components/Headers/PlansHeader.jsx";

const mockedTrips = [{
  status: -1,
  href: '#trip_ID',
  background: 'https://i.ibb.co/GxJBq5H/russia.jpg',
  name: 'Sibrerian Trip',
  date: 'Jan 2018',
  places: [{
    country: 'ru',
    cities: ['Moscow', 'Saint-Petersburg']
  }, {
    country: 'by',
    cities: ['Minsk', 'Grodno']
  }, {
    country: 'ua',
    cities: ['Kiev', 'Odessa']
  }],
  companions: [{
    fullName: '...',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/2dr2cSf/team-3-800x800.jpg'
  },{
    fullName: '...',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/p3RYgXZ/team-2-800x800.jpg'
  },{
    fullName: '...',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/CwwjFzq/team-4-800x800.jpg'
  }]
}, {
  status: -1,
  href: '#trip_ID',
  background: 'https://i.ibb.co/tKTt4Hh/usa.jpg',
  name: 'New York Shopping',
  date: 'Jun 2018',
  places: [{
    country: 'us',
    cities: ['New York, NY']
  }],
  companions: [{
    fullName: '...',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/2dr2cSf/team-3-800x800.jpg'
  },{
    fullName: '...',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/p3RYgXZ/team-2-800x800.jpg'
  },{
    fullName: '...',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/CwwjFzq/team-4-800x800.jpg'
  }]
}];

export const Plans = () => {

  const [endedTrips] = useState(mockedTrips);
  // const [activeTrips] = useState(mockedTrips);
  // const [planningTrips] = useState(mockedTrips);

  const visualizeCompanions = (companions) => {
    return companions.map(companion => {
      return (
        <Col className="order-lg-1" lg="1">
          <div className="card-profile-image-small-2">
            <a href={companion.href} onClick={e => e.preventDefault()}>
              <img
                alt={companion.fullName}
                className="rounded-circle"
                src={companion.avatar}
              />
            </a>
          </div>
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
          <p>{place.cities[0]}</p>
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

  const visualizeTrips = (trips) => {
    return trips.map(trip => {
      const comps = visualizeCompanions(trip.companions);
      const flags = drawFlags(trip.places);
      console.log(comps);
      console.log(flags);
      return (<Col className="mb-5 mb-xl-0" xl="4">
        <Card
          className="card-trip-pic shadow"
          style={{
            background: `url(${trip.background}), linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))`,
            backgroundSize: 'cover'
        }}>
          <Card className="card-trip-data-3">
            <Row className="justify-content-center">
              {visualizeCompanions(trip.companions)}
            </Row>
            <Row className="mt-4 ml-1">
              <h3 style={{ width: '90%' }}>{trip.name}</h3>
            </Row>
            <Row className="mt--2 ml-1"><small>{trip.date}</small></Row>
            <Row className="ml-1 mt-3">
              {drawFlags(trip.places)}
            </Row>
          </Card>
        </Card>
      </Col>);
    });
  };

  return (
    <>
      <PlansHeader />
      {/* Page content */}
      <Container className="mt--7 mb-8" fluid>
        <Col>
          <Col><h3 className="text-white">Active Trips</h3></Col>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="4">
              <Card
                className="card-trip-pic shadow"
                style={{
                  background: `url(${require("assets/img/theme/mallorca.jpg")}), linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))`,
                  backgroundSize: 'cover'
              }}>
                <Card className="card-trip-data-2">
                  <Row className="justify-content-center">
                    <Col className="order-lg-1" lg="1">
                      <div className="card-profile-image-small-2">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-3-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col className="order-lg-3" lg="1">
                      <div className="card-profile-image-small-2">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-2-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col className="order-lg-2" lg="1">
                      <div className="card-profile-image-mid-2">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4 ml-1">
                    <h3 style={{ width: '90%' }}>Dream Trip To Madrid</h3>
                    <i class="fas fa-bell fa-lg mt--4"><sup><small><i class="fas fa-circle fa-xs ml--2 text-red" /></small></sup></i>
                  </Row>
                  <Row className="ml-1 mt-1">
                    <p><FlagIcon className="rounded shadow mr-2" code="es" size="2x" squared={false} /></p>
                    <p className="mt-1">Madrid</p>
                  </Row>
                  <h4 className="text-right mt--3">
                    <i className="fas fa-paperclip mr-3 text-gray" />
                    <i class="fas fa-comments mr-3 text-blue" />
                    <i class="fas fa-map-marker-alt text-red" />
                  </h4>
                </Card>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col className="mt-6">
          <Col><h3 className="text-dark">Planning Trips</h3></Col>
          <Row style={{ minHeight: 320, flexWrap: "nowrap", overflowX: "auto" }}>
            <Col className="mb-5 mb-xl-0" xl="4">
              <Card
                className="card-trip-pic shadow"
                style={{
                  background: `url(https://i.ibb.co/1XB2xgm/madrid.jpg), linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))`,
                  backgroundSize: 'cover'
              }}>
                <NavLink to="/in/trip/333">
                  <Card className="card-trip-data-3">
                    <Row className="justify-content-center">
                    <Col className="order-lg-4" lg="1">
                      <div className="card-profile-image-small-2">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-3-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col className="order-lg-3" lg="1">
                      <div className="card-profile-image-small-2">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-2-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col className="order-lg-2" lg="1">
                      <div className="card-profile-image-small-2">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-1-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="1">
                      <div className="card-profile-image-mid-2">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    </Row>
                    <Row className="mt-4 ml-1">
                      <h3 style={{ width: '90%' }}>Eurotrip</h3>
                      <i class="fas fa-bell fa-lg mt--4"><sup><small><i class="fas fa-circle fa-xs ml--2 text-red" /></small></sup></i>
                    </Row>
                    <Row className="mt--2 ml-1"><small>Jun-Dec 2019</small></Row>
                    <Row className="ml-1 mt-3">
                      <p><FlagIcon className="rounded shadow mr-3" code="es" size="2x" squared={false} /></p>
                      <p><FlagIcon className="rounded shadow mr-3" code="it" size="2x" squared={false} /></p>
                      <p><FlagIcon className="rounded shadow mr-3" code="fr" size="2x" squared={false} /></p>
                    </Row>
                    <h4 className="text-right mt--3">
                      <i className="fas fa-paperclip mr-3 text-gray" />
                      <i class="fas fa-comments text-blue" />
                    </h4>
                  </Card>
                </NavLink>
              </Card>
            </Col>
            <Col className="mb-5 mb-xl-0" xl="4">
              <Card
                className="card-trip-pic shadow"
                style={{
                  background: `url(${require("assets/img/theme/singapore.jpg")}), linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))`,
                  backgroundSize: 'cover'
              }}>
                <Card className="card-trip-data-3">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="1">
                      <div className="card-profile-image-small-2">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-3-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="2">
                      <div className="card-profile-image-mid-2">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4 ml-1">
                    <h3 style={{ width: '90%' }}>Asiatrip</h3>
                    <i class="fas fa-bell fa-lg mt--4"><sup><small><i class="fas fa-circle fa-xs ml--2 text-red" /></small></sup></i>
                  </Row>
                  <Row className="mt--2 ml-1"><small>Dec 2019 - Jan 2020</small></Row>
                  <Row className="ml-1 mt-3">
                    <p><FlagIcon className="rounded shadow mr-3" code="sg" size="2x" squared={false} /></p>
                    <p><FlagIcon className="rounded shadow mr-3" code="my" size="2x" squared={false} /></p>
                    <p><FlagIcon className="rounded shadow mr-3" code="ch" size="2x" squared={false} /></p>
                  </Row>
                  <h4 className="text-right mt--3">
                    <i className="fas fa-paperclip mr-3 text-gray" />
                    <i class="fas fa-comments text-blue" />
                  </h4>
                </Card>
              </Card>
            </Col>
            <Col className="mb-5 mb-xl-0" xl="4">
              <Card
                className="card-trip-pic shadow"
                style={{
                  background: `url(${require("assets/img/theme/japan.jpg")}), linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))`,
                  backgroundSize: 'cover'
              }}>
                <Card className="card-trip-data-3">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="1">
                      <div className="card-profile-image-mid-2">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4 ml-1">
                    <h3 style={{ width: '90%' }}>Japanese Theme</h3>
                    <i class="fas fa-bell fa-lg mt--4"><sup><small><i class="fas fa-circle fa-xs ml--2 text-red" /></small></sup></i>
                  </Row>
                  <Row className="mt--2 ml-1"><small>Mar 2020</small></Row>
                  <Row className="ml-1 mt-3">
                    <p><FlagIcon className="rounded shadow mr-3" code="jp" size="2x" squared={false} /></p>
                    <p>Tokyo</p>
                  </Row>
                  <h4 className="text-right mt--3">
                    <i className="fas fa-paperclip mr-3 text-gray" />
                    <i class="fas fa-comments text-blue" />
                  </h4>
                </Card>
              </Card>
            </Col>
            <Col className="mb-5 mb-xl-0" xl="4">
              <Card
                className="card-trip-pic shadow"
                style={{
                  background: `url(${require("assets/img/theme/australia.jpg")}), linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))`,
                  backgroundSize: 'cover'
              }}>
                <Card className="card-trip-data-3">
                  <Row className="justify-content-center">
                    <Col className="order-lg-1" lg="1">
                      <div className="card-profile-image-small-2">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-3-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col className="order-lg-3" lg="1">
                      <div className="card-profile-image-small-2">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-2-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col className="order-lg-2" lg="1">
                      <div className="card-profile-image-mid-2">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4 ml-1">
                    <h3 style={{ width: '90%' }}>Australia</h3>
                    <i class="fas fa-bell fa-lg mt--4"><sup><small><i class="fas fa-circle fa-xs ml--2 text-red" /></small></sup></i>
                  </Row>
                  <Row className="mt--2 ml-1"><small>Apr 2020</small></Row>
                  <Row className="ml-1 mt-3">
                    <p><FlagIcon className="rounded shadow mr-3" code="au" size="2x" squared={false} /></p>
                    <p>Sydney</p>
                  </Row>
                  <h4 className="text-right mt--3">
                    <i className="fas fa-paperclip mr-3 text-gray" />
                    <i class="fas fa-comments text-blue" />
                  </h4>
                </Card>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col className="mt-6">
          <Col><h3 className="text-dark">Ended Trips</h3></Col>
          <Row>
            {visualizeTrips(endedTrips)}
          </Row>
        </Col>
      </Container>
    </>
  );
};
