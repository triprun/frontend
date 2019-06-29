import React, { useState } from "react";


// reactstrap components
import {
  Container,
  Col
} from "reactstrap";

// core components
import PlansHeader from "components/Headers/PlansHeader.jsx";
import { ScrollRow } from 'components/Micro/ScrollRow.jsx';
import { TripCard } from 'components/Micro/TripCard.jsx';

const mocked = [{
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

  const [endedTrips] = useState(mocked.filter(trip => trip.status < 0));
  const [activeTrips] = useState(mocked.filter(trip => trip.status > 0));
  const [planningTrips] = useState(mocked.filter(trip => trip.status === 0));

  const visualize = (trips) => trips.map(trip => <TripCard trip={ trip } />);

  return (
    <>
      <PlansHeader />
      {/* Page content */}
      <Container className="mt--7 mb-8" fluid>
        <Col>
          <Col><h3 className="text-white">Active Trips</h3></Col>
          <ScrollRow style={{ minHeight: 310 }}>
            {visualize(activeTrips)}
          </ScrollRow>
        </Col>
        <Col className="mt-6">
          <Col><h3 className="text-dark">Planning Trips</h3></Col>
          <ScrollRow style={{ minHeight: 310 }}>
            {visualize(planningTrips)}
          </ScrollRow>
        </Col>
        <Col className="mt-6">
          <Col><h3 className="text-dark">Ended Trips</h3></Col>
          <ScrollRow style={{ minHeight: 310 }}>
            {visualize(endedTrips)}
          </ScrollRow>
        </Col>
      </Container>
    </>
  );
};
