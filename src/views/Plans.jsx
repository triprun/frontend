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
import { ScrollRow } from 'components/Micro/ScrollRow.jsx';

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
},{
  status: 1,
  href: '#trip_ID',
  background: 'https://i.ibb.co/1XB2xgm/madrid.jpg',
  name: 'Dream Trip to Madrid',
  date: 0,
  places: [{
    country: 'es',
    cities: ['Madrid']
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
},{
  status: 0,
  notification: 1, // defines badge on bell icon
  href: '/in/trip/333',
  background: 'https://i.ibb.co/1XB2xgm/madrid.jpg',
  name: 'Eurotrip',
  date: 'Jun-Dec 2019',
  places: [{
    country: 'es',
    cities: ['Madrid', 'Barcelona', 'Sevilla']
  },{
    country: 'it',
    cities: ['Rome']
  },{
    country: 'fr',
    cities: ['Paris']
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
  },{
    fullName: '...',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/Y8KyHW6/team-1-800x800.jpg'
  }]
},{
  status: 0,
  href: '#trip_ID',
  background: 'https://i.ibb.co/TWf5kRN/singapore.jpg',
  name: 'Asiatrip',
  date: 'Dec 2019-Jan 2020',
  places: [{
    country: 'sg',
    cities: ['Singapore']
  },{
    country: 'id',
    cities: ['Jakarta']
  },{
    country: 'my',
    cities: ['Kuala Lumpur']
  }],
  companions: [{
    fullName: '...',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/CwwjFzq/team-4-800x800.jpg'
  },{
    fullName: '...',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/Y8KyHW6/team-1-800x800.jpg'
  }]
},{
  status: 0,
  href: '#trip_ID',
  background: 'https://i.ibb.co/LC2md2n/japan.jpg',
  name: 'Japanese Theme',
  date: 'Mar 2020',
  places: [{
    country: 'jp',
    cities: ['Tokyo']
  }],
  companions: [{
    fullName: '...',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/CwwjFzq/team-4-800x800.jpg'
  }]
},{
  status: 0,
  href: '#trip_ID',
  background: 'https://i.ibb.co/m91qcrn/australia.jpg',
  name: 'Australia',
  date: 'Apr 2020',
  places: [{
    country: 'au',
    cities: ['Sydney']
  }],
  companions: [{
    fullName: '...',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/CwwjFzq/team-4-800x800.jpg'
  },{
    fullName: '...',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/p3RYgXZ/team-2-800x800.jpg'
  }]
}];

export const Plans = () => {

  const [endedTrips] = useState(mockedTrips.filter(trip => trip.status < 0));
  const [activeTrips] = useState(mockedTrips.filter(trip => trip.status > 0));
  const [planningTrips] = useState(mockedTrips.filter(trip => trip.status === 0));

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

  const visualizeTrips = (trips) => {
    return trips.map(trip => {
      return (<Col className="col-12 mr-0 mr-md-0 mb-5 mb-xl-0" xl="4">
        <Card
          className="card-trip-pic shadow"
          style={{
            background: `url(${trip.background}), linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))`,
            backgroundSize: 'cover'
        }}>
          <NavLink to={trip.href}>
            <Card className="card-trip-data-3">
              <Row className="justify-content-center">
                {visualizeCompanions(trip.companions)}
              </Row>
              <Row className="mt-4 ml-1">
                <h3 style={{ width: '90%', color: 'black' }}>{trip.name}</h3>
                { trip.status >= 0 && <i class="fas fa-bell fa-lg mt--4">{ trip.notification && <sup><small><i class="fas fa-circle fa-xs ml--2 text-red" /></small></sup> }</i> }
              </Row>
              { trip.date !== 0 && <Row className="mt--2 ml-1"><small style={{ color: 'gray' }}>{trip.date}</small></Row> }
              <Row className="ml-1 mt-3">
                {drawFlags(trip.places)}
              </Row>
              { trip.status >= 0 && <h4 className="text-right mt--3"><i className="fas fa-paperclip mr-3 text-gray" /><i class="fas fa-comments text-blue" /></h4> }
            </Card>
          </NavLink>
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
          <ScrollRow style={{ minHeight: 310 }}>
            {visualizeTrips(activeTrips)}
          </ScrollRow>
        </Col>
        <Col className="mt-6">
          <Col><h3 className="text-dark">Planning Trips</h3></Col>
          <ScrollRow style={{ minHeight: 310 }}>
            {visualizeTrips(planningTrips)}
          </ScrollRow>
        </Col>
        <Col className="mt-6">
          <Col><h3 className="text-dark">Ended Trips</h3></Col>
          <ScrollRow style={{ minHeight: 310 }}>
            {visualizeTrips(endedTrips)}
          </ScrollRow>
        </Col>
      </Container>
    </>
  );
};
