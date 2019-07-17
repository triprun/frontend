import React, { useState } from 'react';

// reactstrap components
import {
  Container,
  Col,
} from 'reactstrap';

// import FlagIcon from "components/FlagIcon/FlagIcon.jsx";

// core components
import { Header } from 'components/Headers/Header.jsx';
import { ScrollRow } from 'components/Micro/ScrollRow.jsx';
import { TripCard } from 'components/Micro/TripCard.jsx';
import { StoryImageVisible } from 'components/Micro/StoryImageVisible.jsx';

// const { pictures } = require('./pictures');

const mocked = [{
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
},{
  status: 0,
  href: '#trip_ID',
  background: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg',
  name: 'Trainspotting And Beyond',
  date: 'Jul 2019',
  places: [{
    country: 'gb-eng',
    cities: ['London']
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
  background: 'https://images.ctfassets.net/xw2h6mjophtz/1TYSrypcMzY3kKddGhuZo1/e69f694bcf4f68aa214016cfc4f4259f/manchester_Skyline__Craig_1_small.jpg?w=1255&q=80',
  name: 'Manchester FC Fanclub',
  date: 'Mar 2019',
  places: [{
    country: 'gb-eng',
    cities: ['Manchester']
  }],
  companions: [{
    fullName: '...',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/p3RYgXZ/team-2-800x800.jpg'
  },{
    fullName: '...',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/Y8KyHW6/team-1-800x800.jpg'
  },{
    fullName: '...',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/CwwjFzq/team-4-800x800.jpg'
  },{
    fullName: '...',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/Y8KyHW6/team-1-800x800.jpg'
  },{
    fullName: '...',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/Y8KyHW6/team-1-800x800.jpg'
  },{
    fullName: '...',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/p3RYgXZ/team-2-800x800.jpg'
  },]
},{
  status: 0,
  href: '#trip_ID',
  background: 'https://cardiff.imgix.net/__data/assets/image/0003/19578/cardiff-bay.jpg?w=570&fit=clip',
  name: 'Cardiff 2019',
  date: 'Apr 2019',
  places: [{
    country: 'gb-wls',
    cities: ['Cardiff']
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

const mockedCountries = [
  {
    source: 'https://independenthostels.co.uk/wp-content/uploads/2015/02/scotland-map-photo.jpg',
    name: 'Scotland'
  },
  {
    source: 'https://www.irishtimes.com/polopoly_fs/1.3834005.1553178907!/image/image.jpg_gen/derivatives/box_620_330/image.jpg',
    name: 'England'
  },
  {
    source: 'https://www.ramblers.org.uk/~/media/Images/Go%20walking/Wales%20Coast%20Path/Anglesey---Mother-Goose-Films-2018-735.jpg',
    name: 'Wales'
  }
];

const mockedCities = [
  {
    source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg',
    name: 'London'
  },
  {
    source: 'https://traveller-eu.ru/sites/default/files/styles/index/public/image-800x600.jpg?itok=4JxWK1ZO',
    name: 'Manchester'
  },
  {
    source: 'https://www.independent-birmingham.co.uk/wp-content/uploads/2015/09/CherryblossomWEB-1024x683.jpg',
    name: 'Birmingham'
  },
  {
    source: 'https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F67ae3030-2886-11e8-bb7d-85110f4c5caa.jpg?crop=1152%2C648%2C0%2C60&resize=685',
    name: 'Edinbourgh'
  },
  {
    source: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/04/09/glasgow.jpg?w968h681',
    name: 'Glasgow'
  },
  {
    source: 'https://www.visitwales.com/sites/default/files/styles/o_herodestinationregion_fullwidth_1x/public/media-library/2019-01/SVW-C85-1617-0192-ALT-small.jpg?h=b28d2114&amp;itok=v9yIttA4%201x',
    name: 'Cardiff'
  },
  {
    source: 'https://upload.wikimedia.org/wikipedia/commons/2/27/P.3._Swansea_City_Centre_2012.jpg',
    name: 'Swansea'
  }
];

export const Recommended = () => {
  const [recommendedTrips] = useState(mocked.filter(trip => trip.status === 0));
  const [recommendedCountries] = useState(mockedCountries.map(country => ({ ...country, width: 2 })));
  const [recommendedCities] = useState(mockedCities.map(city => ({ ...city, width: 2 })));

  const visualize = (trips) => trips.map(trip => <TripCard trip={ trip } />);
  const visualizeStory = (inputs) => inputs.map(input => <StoryImageVisible { ...input } />)

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--5" fluid>
        <Col className="col-12" style={{ margin: 0, padding: 0 }}>
          <h3 className="text-white">Trips for you:</h3>
          <ScrollRow style={{ minHeight: 310 }}>
            {visualize(recommendedTrips)}
          </ScrollRow>
          <br />
          <h3>Countries you are interested in:</h3>
          <ScrollRow style={{ minHeight: 310 }}>
            {visualizeStory(recommendedCountries)}
          </ScrollRow>
          <br />
          <br />
          <h3>Cities your are interested in:</h3>
          <ScrollRow style={{ minHeight: 310 }}>
            {visualizeStory(recommendedCities)}
          </ScrollRow>
        </Col>
      </Container>
    </>
  );
};
