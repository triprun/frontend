import React, { useState } from "react";

import {
  Container,
  Col,
} from 'reactstrap';

// core components
import { DetailedHeader } from "components/Headers/DetailedHeader.jsx";
import { ScrollRow } from 'components/Micro/ScrollRow.jsx';
import { TripCard } from 'components/Micro/TripCard.jsx';
import { StoryImageVisible } from 'components/Micro/StoryImageVisible.jsx';

const mocked = {
  source: 'https://independenthostels.co.uk/wp-content/uploads/2015/02/scotland-map-photo.jpg',
  name: 'Scotland',
  continent: 'Europe',
  description: 'Scotland, the U.K.’s northernmost country, is a land of mountain wildernesses such as the Cairngorms and Northwest Highlands, interspersed with glacial glens (valleys) and lochs (lakes).',
  profiles: [{
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
};

const mockedCities = [
  {
    href: '#id',
    source: 'https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F67ae3030-2886-11e8-bb7d-85110f4c5caa.jpg?crop=1152%2C648%2C0%2C60&resize=685',
    name: 'Edinbourgh'
  },
  {
    href: '#id',
    source: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/04/09/glasgow.jpg?w968h681',
    name: 'Glasgow'
  }
];

const mockedTrips = [{
  status: 0,
  href: '#trip_ID',
  background: 'https://independenthostels.co.uk/wp-content/uploads/2015/02/scotland-map-photo.jpg',
  name: 'Lord Of The Rings trip',
  date: 'Oct-Nov 2018',
  places: [{
    country: 'gb-sct',
    cities: ['Glasgow']
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
}];

export const DetailedInner = (props) => {

  const [overall] = useState(mocked);
  const [cities] = useState(mockedCities.map(city => ({ ...city, width: 2 })));
  const [trips] = useState(mockedTrips);

  const visualize = (trips) => trips.map(trip => <TripCard trip={ trip } />);
  const visualizeStory = (inputs) => inputs.map(input => <StoryImageVisible { ...input } />)

  return (
    <>
      <DetailedHeader
        source={ overall.source }
        name={ overall.name }
        continent={ overall.continent }
        description={ overall.description }
        profiles={ overall.profiles }
      />
      {/* Page content */}
      <Container className="mt-5" fluid>
        <Col className="col-12" style={{ margin: 0, padding: 0 }}>
          <h3 className="text-dark">Popular destinations in { overall.name }:</h3>
          <ScrollRow style={{ minHeight: 310 }}>
            { visualizeStory(cities) }
          </ScrollRow>
          <br/>
          <br/>
          <h3 className="text-dark">Popular marschroutes in { overall.name }:</h3>
          <ScrollRow style={{ minHeight: 310 }}>
            { visualize(trips) }
          </ScrollRow>
        </Col>
      </Container>
    </>
  );
};
