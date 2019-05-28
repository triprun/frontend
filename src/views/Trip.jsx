import React, { useState, useEffect } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavLink,
  Table,
  Container,
  Row,
  Col,
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  UncontrolledTooltip
} from "reactstrap";

import moment from 'moment';

// core components
import { TripHeader } from "components/Headers/TripHeader.jsx";

import runningMan from "assets/img/icons/running.svg";

const users = [
  {
    id: 1,
    name: 'Thomas Hild',
    avatar: 'https://i.ibb.co/Y8KyHW6/team-1-800x800.jpg'
  },
  {
    id: 3,
    name: 'Romina Hadid',
    avatar: 'https://i.ibb.co/2dr2cSf/team-3-800x800.jpg'
  },
  {
    id: 13,
    name: 'Ryan Tompson',
    avatar: 'https://i.ibb.co/CwwjFzq/team-4-800x800.jpg'
  }
];

const mockedData = {
  name: 'Eurotrip',
  date: 'Jun-Dec 2019',
  background: 'https://i.ibb.co/1XB2xgm/madrid.jpg',
  countries: [
    {
      country: 'es',
      arriveWith: 0,
      cities: [
        {
          city: 'Barcelona',
          arriveWith: 0,
          places: [
            {
              type: 'hotel',
              name: 'Gran Hotel La Florida G.L. Monumento',
              picture: 'https://i.ibb.co/wsLbm0F/hotel.jpg',
              rating: 5,
              date: 1561338000000,
              arrival: '13:00',
              duration: 1000 * 60 * 60 * 24 * 2,
              address: 'Carretera Vallvidrera-Tibidabo, 83-93',
              comments: '/in/trip/333/comments',
              going: [13, 1],
              rest: [3]
            },
            {
              type: 'restaurant',
              name: 'Bodega Biarritz',
              picture: 'https://i.ibb.co/Y0SPTs0/rest.png',
              rating: 5,
              date: 1561338000000,
              arrival: '15:00',
              open: ['10:00', '22:00'],
              menu: '/in/info/rest_97_menu',
              book: '/in/booking/rest_97',
              address: 'Nou de San Francesc 7',
              comments: '/in/trip/333/comments',
              going: [1],
              rest: [13, 3]
            },
            {
              type: 'sightseeing',
              name: 'Temple Expiatori de la Sagrada Família',
              picture: 'https://i.ibb.co/NVfSQ6C/sightseeing.jpg',
              rating: 5,
              date: 1561338000000,
              arrival: '16:00',
              duration: 1000 * 60 * 60 * 2,
              address: 'Carrer de Mallorca, 401',
              comments: '/in/trip/333/comments',
              going: [13, 1],
              rest: [3]
            },
            {
              type: 'sightseeing',
              name: 'Casa Batlló',
              picture: 'https://i.ibb.co/51yXhRZ/sightseeing2.jpg',
              rating: 5,
              date: 1561338000000,
              arrival: '20:00',
              duration: 1000 * 60 * 60 * 1,
              address: 'Passeig de Gràcia, 43',
              comments: '/in/trip/333/comments',
              going: [13, 1],
              rest: [3]
            },
            {
              type: 'restaurant',
              name: 'Souvenir Restaurant Ruso',
              picture: 'https://i.ibb.co/5WxtLG2/rest2.jpg',
              rating: 5,
              date: 1561338000000,
              arrival: '22:00',
              open: ['10:00', '01:00'],
              menu: '/in/info/rest_103_menu',
              book: '/in/booking/rest_103',
              address: 'Carrer de València, 232',
              comments: '/in/trip/333/comments',
              going: [13, 1],
              rest: [3]
            }
          ]
        },
        {
          city: 'Madrid',
          arriveWith: 2,
          places: [
            {
              type: 'hotel',
              name: 'VP Plaza España Design',
              picture: 'https://q-ak.bstatic.com/images/hotel/max1280x900/152/152843476.jpg',
              rating: 5,
              date: 1561338000000,
              arrival: '15:00',
              duration: 1000 * 60 * 60 * 24 * 3,
              address: 'Plaza de España n.5',
              comments: '/in/trip/333/comments',
              going: [13, 1, 3],
              rest: null
            },
            {
              type: 'restaurant',
              name: 'Meson Restaurante La Mi Venta',
              picture: 'https://i.ibb.co/BqgPN2K/rest3.jpg',
              rating: 5,
              date: 1561338000000,
              arrival: '17:00',
              open: ['10:00', '05:00'],
              menu: '/in/info/rest_45557_menu',
              book: '/in/booking/rest_45557',
              address: 'Plaza Marina Espanola 7, 28013',
              comments: '/in/trip/333/comments',
              going: [1, 3],
              rest: [13]
            },
            {
              type: 'restaurant',
              name: 'Los Montes de Galicia',
              picture: 'https://i.ibb.co/4KdxbmL/rest4.jpg',
              rating: 5,
              date: 1561338000000,
              arrival: '20:00',
              open: ['12:00', '21:00'],
              menu: '/in/info/rest_45558_menu',
              book: '/in/booking/rest_45558',
              address: 'Calle Azcona 46, 28028',
              comments: '/in/trip/333/comments',
              going: [1],
              rest: [3, 13]
            },
            {
              type: 'sightseeing',
              name: 'Museo Nacional del Prado',
              picture: 'https://i.ibb.co/99vTzcM/sightseeing3.jpg',
              rating: 5,
              date: 1561338000000,
              arrival: '21:30',
              duration: 1000 * 60 * 60 * 1,
              address: 'Calle de Bailén, s/n, 28071',
              comments: '/in/trip/333/comments',
              going: null,
              rest: [1, 3, 13]
            },
            {
              type: 'sightseeing',
              name: 'Parque del Buen Retiro',
              picture: 'https://i.ibb.co/nCM9D2J/sightseeing4.jpg',
              rating: 5,
              date: 1561338000000,
              arrival: '23:00',
              duration: 1000 * 60 * 60 * 3,
              address: 'Plaza de la Independencia, 7, 28001',
              comments: '/in/trip/333/comments',
              going: [1, 3],
              rest: [13]
            }
          ]
        },
        {
          city: 'Sevilla',
          arriveWith: 1,
        }
      ]
    },
    {
      country: 'it',
      arriveWith: 3,
      cities: [
        {
          city: 'Rome',
          arriveWith: 0,
          places: [
            {
              type: 'hotel',
              name: 'Hotel Raphael – Relais & Châteaux',
              picture: 'https://r-ak.bstatic.com/images/hotel/max1280x900/365/36559987.jpg',
              rating: 5,
              date: 1561338000000,
              arrival: '09:00',
              duration: 1000 * 60 * 60 * 24 * 4,
              address: 'Largo Febo 2, Navona, 00186',
              comments: '/in/trip/333/comments',
              going: [1, 3, 13],
              rest: null
            },
            {
              type: 'sightseeing',
              name: 'Colosseus',
              picture: 'https://i.ibb.co/NKKHtTc/sightseeing5.jpg',
              rating: 5,
              date: 1561338000000,
              arrival: '12:00',
              duration: 1000 * 60 * 60 * 2,
              address: 'Piazza del Colosseo, 1, 00184 Comune di Roma RM',
              comments: '/in/trip/333/comments',
              going: [3, 13],
              rest: [1]
            },
            {
              type: 'sightseeing',
              name: 'Forum Romanum',
              picture: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Forum_Romanum_Rom.jpg',
              rating: 5,
              date: 1561338000000,
              arrival: '15:00',
              duration: 1000 * 60 * 60 * 24 * 1,
              address: 'Via della Salara Vecchia, 5/6, 00186 Roma RM',
              comments: '/in/trip/333/comments',
              going: [3, 13],
              rest: [1]
            },
            {
              type: 'sightseeing',
              name: 'Fontana di Trevi',
              picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Panorama_of_Trevi_fountain_2015.jpg/2560px-Panorama_of_Trevi_fountain_2015.jpg',
              rating: 5,
              date: 1561338000000,
              arrival: '17:00',
              duration: 1000 * 60 * 60 * 24 * 2,
              address: 'Piazza di Trevi, 00187 Comune di Roma RM',
              comments: '/in/trip/333/comments',
              going: [1, 3],
              rest: [13]
            },
            {
              type: 'restaurant',
              name: 'Tonnarello',
              picture: 'https://i.ibb.co/C68yLzM/rest5.jpg',
              rating: 5,
              date: 1561338000000,
              arrival: '20:15',
              open: ['12:00', '00:00'],
              menu: '/in/info/rest_3965_menu',
              book: '/in/booking/rest_3695',
              address: 'Via della Paglia 1, 00153',
              comments: '/in/trip/333/comments',
              going: [1, 3, 13],
              rest: null
            }
          ]
        }
      ]
    },
    {
      country: 'fr',
      cities: null,
      arriveWith: 1,
    }
  ],
  chat: [{
    from: 3,
    content: `Hi Guys! Welcome to the trip I'm planning for us :)`
  }, {
    from: 13,
    content: `Nice to meet ya'll! I'm ready to head out ASAP xoxo`,
  }, {
    from: 13,
    content: 'btw, who will add Jonah? He wants to join us'
  }],
  todo: [{
    status: 0,
    content: 'Save water!!!'
  }, {
    status: 3,
    content: 'Buy Coals'
  }, {
    status: 1,
    content: 'Plan this trip :)'
  }, {
    status: 2,
    content: 'Spen Bonuses!'
  }, {
    status: 3,
    content: 'Take books to train'
  }],
  docs: '/in/trip/333/docs',
  tickets: '/in/trip/333/tickets',
  services: '/in/trip/333/services',
};

export const TripInner = (props) => {

  // const [tripID] = useState(props.match.params.trip_id);
  const [trip] = useState(mockedData); // this is fetched using tripID
  const [activeCountry, setCountry] = useState(trip.countries[0]);
  const [activeCity, setCity] = useState(activeCountry.cities[0]);

  useEffect(() => {
    setCity(activeCountry.cities[0]);
  }, [activeCountry]);

  const parseDuration = (num) => {
    let duration = Number.parseInt((((num / 1000) / 60) / 60) / 24);
    if(duration <= 0) return `${Number.parseInt(((num / 1000) / 60) / 60)} hours`;
    return `${duration} days`;
  };

  const prepUser = (uid) => {
    const user = users.filter(user => user.id === uid)[0];
    return (
      <>
        <a
          className="avatar avatar-sm"
          href={`#${user.id}`}
          id="tooltip731399078"
          onClick={e => e.preventDefault()}
        >
          <img
            alt={user.name}
            className="rounded-circle"
            src={user.avatar}
          />
        </a>
        <UncontrolledTooltip
          delay={0}
          target="tooltip731399078"
        >
          { user.name }
        </UncontrolledTooltip>
      </>
    );
  };

  const prepIcon = (num) => {
    switch(num) {
      case 1:
      return (<i className="fas fa-car mt--2 text-darker"></i>);
      case 2:
      return (<i className="fas fa-train mt--2 text-darker"></i>);
      case 3:
      return (<i className="fas fa-plane mt--2 text-darker"></i>);
      default: return (<i class="fas fa-walking mt--2 text-darker"></i>);
    };
  };

  const fetchCities = (country) => {
    return country.cities.map(block => {
      if(block.city === activeCity.city) return (
        <>
          { block.arriveWith ? (<><p className="mr-2 ml-2 mt-2 text-darker"> – </p>{ prepIcon(block.arriveWith) }<p className="mr-2 ml-2 mt-2 text-darker"> – </p></>) : null }
          <h3 className="text-darker" style={{ cursor: 'pointer' }} onClick={ () => { setCity(block) } }><u>{block.city}</u></h3>
        </>
      );
      return (
        <>
          { block.arriveWith ? (<><p className="mr-2 ml-2 mt-2 text-darker"> – </p>{ prepIcon(block.arriveWith) }<p className="mr-2 ml-2 mt-2 text-darker"> – </p></>) : null }
          <h3 className="text-darker" style={{ cursor: 'pointer' }} onClick={ () => { setCity(block) } }>{block.city}</h3>
        </>
      );
    });
  };

  const prepPlaceIcon = (t) => {
    switch(t) {
      case 'hotel': return (<><i className="fas fa-hotel text-pink fa-lg mr-2"></i><span className="text-gray">Hotel</span></>);
      case 'restaurant': return (<><i className="fas fa-utensils text-orange fa-lg mr-2"></i><span className="text-gray">Restaurant</span></>);
      case 'sightseeing': return (<><i className="fas fa-landmark text-gray fa-lg mr-2"></i><span className="text-gray">Sightseeing</span></>);
      case 'photoplace': return (<><i className="fas fa-camera-retro text-darker fa-lg mr-2"></i><span className="text-gray">Photo place</span></>);
      case 'favourites': return (<><i className="fas fa-star text-yellow fa-lg mr-2"></i><span className="text-gray">Favourites</span></>);
    };
  };

  const prepPlaceStars = (rating) => {
    let stars = [];
    for(let i = 0; i < rating; i++) {
      stars.concat(<i className="fas fa-star text-yellow fa-sm mr-1"></i>);
    };
    return stars;
  };

  const fetchCards = (city) => {
    return city.places.map(place => {
      return (
        <Card className="rounded shadow mb-4 px-3" style={{ minHeight: "260px" }}>
          <Row>
            <Col xl="8" className="pt-3">
              <Row className="ml-1">
                { prepPlaceIcon(place.type) }
              </Row>
              <Row className="ml-1">
                <h3>{ place.name }</h3>
              </Row>
              <Row className="ml-1">
                { prepPlaceStars(place.rating) }
              </Row>
              <Row className="ml-1 mt-1 text-gray">
                { place.duration && <small>At { place.arrival } | For { parseDuration(place.duration) }</small> }
                { !place.duration && <small>At { place.arrival } | Open: { place.open[0] }–{ place.open[1] } | Menu</small> }
              </Row>
              <Row className="ml-1 mt-3 text-gray">
                <small><i className="fas fa-map-marker-alt text-red"></i> { place.address }</small>
              </Row>
              <Row className="ml-1 mt-3 text-blue" style={{ cursor: 'pointer' }}>
                <small><NavLink to={ place.comments }>Comments...</NavLink></small>
              </Row>
              <Row className="ml-1 mt-4 text-gray">
                <Row className="ml-1 mr-6">
                  <div className="mt-1 mr-2">
                    <img alt="..." src={runningMan} style={{ height: '18px' }} />
                    <sup>
                      <i className="fas fa-check fa-sm text-green"></i>
                    </sup>
                  </div>
                  <div className="avatar-group">
                    { place.going && place.going.map(uid => prepUser(uid))}
                  </div>
                </Row>
                <Row className="ml-1">
                  <div className="mt-1 mr-2">
                    <img alt="..." src={runningMan} style={{ height: '18px' }} />
                    <sup>
                      <i className="fas fa-times fa-sm text-red"></i>
                    </sup>
                  </div>
                  <div className="avatar-group">
                    { place.rest && place.rest.map(uid => prepUser(uid))}
                  </div>
                </Row>
              </Row>
            </Col>
            <Col xl="4" style={{ overflow: "hidden" }} >
              <img alt="..." className="rounded-right" style={{ width: "108%", height: "260px", objectFit: "cover" }} src={ place.picture } />
            </Col>
          </Row>
        </Card>
      );
    });
  }

  const fetchMessages = (chat) => {
    return chat.map(message => {
      if(message.from === 13) return (
        <div className="rounded bg-info float-right px-2 pt-2 pb-2 mr--4 mb-2 text-white" style={{ maxWidth: "80%" }}>
          { message.content }
        </div>
      );
      return (
        <div className="rounded bg-gray float-left px-2 pt-2 pb-2 ml--4 mb-2 text-white" style={{ maxWidth: "80%" }}>
          { message.content }
        </div>
      );
    });
  };

  const prepStatus = (num) => {
    switch(num) {
      case 1: return (<><i className="bg-info" />pending</>)
      case 2: return (<><i className="bg-warning" />deadline</>)
      case 3: return (<><i className="bg-green" />completed</>)
      default: return (<><i className="bg-danger" />infinite</>)
    }
  };

  const fetchTODOs = (list) => {
    return list.map(note => {
      return (
        <tr>
          <th scope="row">
            <Media className="align-items-center">
              <Media>
                <span className="mb-0 text-sm">
                  { note.content }
                </span>
              </Media>
            </Media>
          </th>
          <td>
            <Badge color="" className="badge-dot mr-4">
              { prepStatus(note.status) }
            </Badge>
          </td>
          <td className="text-right">
            <UncontrolledDropdown>
              <DropdownToggle
                className="btn-icon-only text-light"
                href="#pablo"
                role="button"
                size="sm"
                color=""
                onClick={e => e.preventDefault()}
              >
                <i className="fas fa-ellipsis-v" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Action
                </DropdownItem>
                <DropdownItem
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Another action
                </DropdownItem>
                <DropdownItem
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Something else here
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
      );
    });
  };

  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const prepDates = (dates) => {
    return dates.map(d => {
      const date = moment(d).format('MMM Do');
      const day = moment(d).format('dddd');
      return (
        <Card className="card-date mb-2 text-center pt-2">
          <small>{ date }</small>
          <h4>{ day }</h4>
        </Card>
      );
    });
  };

  return (
    <>
      <TripHeader
        background={mockedData.background}
        name={mockedData.name}
        dates={mockedData.date}
        countries={mockedData.countries}
        setter={setCountry}
      />
      {/* Page content */}
      <Container className="mt--7" fluid>
      <Row className="mb-4">
        <Col className="mb-5 mb-xl-0" xl="8">
          <Card className="bg-gradient-white shadow">
            <CardHeader className="bg-light">
              <Row className="align-items-center ml-1">
                { fetchCities(activeCountry) }
                <p className="mr-2 ml-2 mt-2 text-darker"> – </p>
                <Button
                  className="mt--2"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                  size="sm"
                >
                  <i className="fas fa-plus-circle fa-md mr-2" /> Add new city
                </Button>
              </Row>
            </CardHeader>
            <CardBody>
              <Row>
                <Col className="card-date active mr-1 text-center">
                  <i className="fas fa-globe-americas text-blue fa-2x"></i>
                  <br/>
                  <small><u>All places</u></small>
                </Col>
                <Col className="card-date mr-1 text-center">
                  <i className="fas fa-hotel text-pink fa-2x"></i>
                  <br/>
                  <small>Hotels</small>
                </Col>
                <Col className="card-date mr-1 text-center">
                  <i className="fas fa-utensils text-orange fa-2x"></i>
                  <br/>
                  <small>Restaurants</small>
                </Col>
                <Col className="card-date mr-1 text-center">
                  <i className="fas fa-landmark text-gray fa-2x"></i>
                  <br/>
                  <small>Sightseeings</small>
                </Col>
                <Col className="card-date mr-1 text-center">
                  <i className="fas fa-camera-retro text-darker fa-2x"></i>
                  <br/>
                  <small>Photo places</small>
                </Col>
                <Col className="card-date mr-1 text-center">
                  <i className="fas fa-star text-yellow fa-2x"></i>
                  <br/>
                  <small>Favourites</small>
                </Col>
                <Col className="card-date mr-1 text-center">
                  <i className="fas fa-plus-circle text-info fa-2x" />
                  <br/>
                  <small>My place</small>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col xl="2" className="border-right">
                  <Card className="card-date shadow mb-2 text-center pt-2">
                    <h4>Overview</h4>
                  </Card>
                  { prepDates(activeCity.places.map(place => {
                    if(place.duration && Number.parseInt((((place.duration / 1000) / 60) / 60) / 24) > 0) {
                      let dates = [];
                      for(let i = 0; i < Number.parseInt((((place.duration / 1000) / 60) / 60) / 24); i++) {
                        let mul = i * 1000 * 60 * 60 * 24;
                        dates = dates.concat(place.date + mul);
                      }
                      return dates;
                    }
                    return place.date;
                  }).flat().filter(onlyUnique)) }
                </Col>
                <Col xl="10" style={{ flexWrap: "nowrap", overflowY: "auto", overflowX: "hidden" }}>
                  { fetchCards(activeCity) }
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col className="mb-5 mb-xl-0" xl="4">
          <Card className="bg-gradient-white shadow">
            <CardHeader className="bg-white border-bottom">
              <Row className="align-items-center">
                <div className="col">
                  <h3 className="text-darker">Chat</h3>
                </div>
                <div className="avatar-group">
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip731399078"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip731399078"
                  >
                    Ryan Tompson
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip491083084"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip491083084"
                  >
                    Romina Hadid
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip528540780"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip528540780"
                  >
                    Alexander Smith
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-sm"
                    href="#pablo"
                    id="tooltip237898869"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                    />
                  </a>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip237898869"
                  >
                    Jessica Doe
                  </UncontrolledTooltip>
                </div>
              </Row>
            </CardHeader>
            <CardBody>
              <div className="col" style={{ height: '300px' }}>
                { fetchMessages(trip.chat) }
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-paperclip"></i></span>
                </div>
                <input type="text" className="form-control" aria-label="Text..." placeholder="Write a message" />
                <div className="input-group-append">
                  <span className="input-group-text"><i className="far fa-paper-plane"></i></span>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="shadow mt-3">
            <CardHeader className="bg-transparent">
              <Row className="align-items-center">
                <div className="col">
                  <h6 className="text-uppercase text-muted ls-1 mb-1">
                    Performance
                  </h6>
                  <h2 className="mb-0">TODO List</h2>
                </div>
              </Row>
            </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <tbody>
                  { fetchTODOs(trip.todo) }
                </tbody>
              </Table>
            <CardBody>
            </CardBody>
          </Card>
          <Card className="shadow mt-3 card-trip-pic-2" style={{
            background: `url(${require("assets/img/theme/passport.jpg")}), linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))`,
            backgroundSize: 'cover'
          }}>
            <CardHeader className="bg-transparent">
              <Row className="align-items-center">
                <div className="col">
                  <h6 className="text-uppercase text-secondary ls-1 mb-1">
                    List
                  </h6>
                  <h2 className="mb-0 text-white">Notes & Docs</h2>
                </div>
              </Row>
            </CardHeader>

            <CardBody>
            </CardBody>
          </Card>
          <Card className="shadow mt-3 card-trip-pic-2" style={{
            background: `url(${require("assets/img/theme/plane.jpg")}), linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))`,
            backgroundSize: 'cover'
          }}>
            <CardHeader className="bg-transparent">
              <Row className="align-items-center">
                <div className="col">
                  <h6 className="text-uppercase text-secondary ls-1 mb-1">
                    List
                  </h6>
                  <h2 className="mb-0 text-white">Tickets</h2>
                </div>
              </Row>
            </CardHeader>

            <CardBody>
            </CardBody>
          </Card>
          <Card className="shadow mt-3 card-trip-pic-2" style={{
            background: `url(${require("assets/img/theme/cars.jpg")}), linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))`,
            backgroundSize: 'cover'
          }}>
            <CardHeader className="bg-transparent">
              <Row className="align-items-center">
                <div className="col">
                  <h6 className="text-uppercase text-secondary ls-1 mb-1">
                    List
                  </h6>
                  <h2 className="mb-0 text-white">Services</h2>
                </div>
              </Row>
            </CardHeader>

            <CardBody>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col className="mb-5 mb-xl-0" xl="12">
          <Card className="bg-gradient-white shadow">
            <img alt="..." className="rounded" style={{ width: "100%" }} src={require("assets/img/theme/planMap.jpg")} />
          </Card>
        </Col>
      </Row>
      </Container>
    </>
  );
};
