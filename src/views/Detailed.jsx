import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import {
  Container,
  Col,
} from 'reactstrap';

// core components
import { DetailedHeader } from "components/Headers/DetailedHeader.jsx";
import { ScrollRow } from 'components/Micro/ScrollRow.jsx';
import { TripCard } from 'components/Micro/TripCard.jsx';
import { StoryImageVisible } from 'components/Micro/StoryImageVisible.jsx';

const mocked = [{
  type: 'ctry',
  id: 24,
  source: 'https://independenthostels.co.uk/wp-content/uploads/2015/02/scotland-map-photo.jpg',
  name: 'Scotland',
  continent: 'Europe',
  likes: 98,
  description: 'Scotland, the U.K.’s northernmost country, is a land of mountain wildernesses such as the Cairngorms and Northwest Highlands, interspersed with glacial glens (valleys) and lochs (lakes).',
  profiles: [{
    fullName: 'Kira',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/2dr2cSf/team-3-800x800.jpg'
  },{
    fullName: 'Sam',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/p3RYgXZ/team-2-800x800.jpg'
  },{
    fullName: 'Jessica',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/CwwjFzq/team-4-800x800.jpg'
  }],
  cities: [{
    href: '/in/city/11',
    source: 'https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F67ae3030-2886-11e8-bb7d-85110f4c5caa.jpg?crop=1152%2C648%2C0%2C60&resize=685',
    name: 'Edinbourgh'
  },
  {
    href: '#id',
    source: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/04/09/glasgow.jpg?w968h681',
    name: 'Glasgow'
  }],
  trips:[{
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
  }]
}, {
  type: 'city',
  id: 11,
  source: 'https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F67ae3030-2886-11e8-bb7d-85110f4c5caa.jpg?crop=1152%2C648%2C0%2C60&resize=685',
  name: 'Edinbourgh',
  country: 'Scotland',
  toSee: [],
  price: 2,
  rating: 4,
  likes: 66,
  description: 'Edinburgh is Scotland’s compact, hilly capital. It has a medieval Old Town and elegant Georgian New Town with gardens and neoclassical buildings. Looming over the city is Edinburgh Castle, home to Scotland’s crown jewels and the Stone of Destiny, used in the coronation of Scottish rulers.',
  profiles: [{
    fullName: 'Kira',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/2dr2cSf/team-3-800x800.jpg'
  },{
    fullName: 'Sam',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/p3RYgXZ/team-2-800x800.jpg'
  },{
    fullName: 'Jessica',
    href: '#user_ID',
    avatar: 'https://i.ibb.co/CwwjFzq/team-4-800x800.jpg'
  }],
  trips:[{
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
  }]
}];

export const DetailedInner = (props) => {

  let split = window.location.pathname.split('/');
  split.shift();
  split.shift();
  let data = split;

  const found = mocked.filter(mock => Number.parseInt(mock.id) === Number.parseInt(data[1]) && mock.type === data[0]);
  if(!found.length) return(<Redirect to={{ pathname: "/" }} />);

  const [overall, setOverall] = useState(found[0]);
  const [cities, setCities] = useState(null);
  const [trips, setTrips] = useState(null);

  useEffect(() => {
    let split = window.location.pathname.split('/');
    split.shift();
    split.shift();
    let data = split;

    const found = mocked.filter(mock => Number.parseInt(mock.id) === Number.parseInt(data[1]) && mock.type === data[0]);
    if(!found.length) return(<Redirect to={{ pathname: "/" }} />);
    setOverall(found[0]);
  }, [window.location.pathname]);

  useEffect(() => {
    if(overall.type === 'ctry') {
      setCities(overall.cities.map(city => ({ ...city, width: 2 })));
      setTrips(overall.trips);
    } else if(overall.type === 'city') {
      setCities(null);
      setTrips(overall.trips);
    }
  }, [overall]);

  const visualize = (trips) => trips.map(trip => <TripCard trip={ trip } />);
  const visualizeStory = (inputs) => inputs.map(input => <StoryImageVisible { ...input } />)

  return (
    <>
      <DetailedHeader
        source={ overall.source }
        name={ overall.name }
        continent={ overall.continent }
        country={ overall.country }
        toSee={ overall.toSee }
        price={ overall.price }
        rating={ overall.rating }
        description={ overall.description }
        profiles={ overall.profiles }
        likes={ overall.likes }
      />
      {/* Page content */}
      <Container className="mt-5" fluid>
        <Col className="col-12" style={{ margin: 0, padding: 0 }}>
          <h3 className="text-dark">Popular destinations in { overall.name }:</h3>
          <ScrollRow style={{ minHeight: 310 }}>
            { cities && visualizeStory(cities) }
          </ScrollRow>
          <br/>
          <br/>
          <h3 className="text-dark">Popular marschroutes in { overall.name }:</h3>
          <ScrollRow style={{ minHeight: 310 }}>
            { trips && visualize(trips) }
          </ScrollRow>
        </Col>
      </Container>
    </>
  );
};
