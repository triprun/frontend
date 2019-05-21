import React from "react";

// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Progress,
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

import FlagIcon from "components/FlagIcon/FlagIcon.jsx";

// core components
import TripHeader from "components/Headers/TripHeader.jsx";

import runningMan from "assets/img/icons/running.svg";

class Trip extends React.Component {
  render() {
    return (
      <>
        <TripHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
        <Row className="mb-4">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-white shadow">
              <CardHeader className="bg-light">
                <Row className="align-items-center ml-1">
                  <h3 className="text-darker"><u>Barcelona</u></h3>
                  <p className="mr-2 ml-2 mt-2 text-darker"> – <i class="fas fa-subway"></i> – </p>
                  <h3 className="text-darker">Madrid</h3>
                  <p className="mr-2 ml-2 mt-2 text-darker"> – <i class="fas fa-bus"></i> – </p>
                  <h3 className="text-darker">Sevilla</h3>
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
              <CardBody style={{ height: "700px", maxHeight: "700px" }}>
                <Row>
                  <Col className="card-date active mr-1 text-center">
                    <i class="fas fa-globe-americas text-blue fa-2x"></i>
                    <br/>
                    <small><u>All places</u></small>
                  </Col>
                  <Col className="card-date mr-1 text-center">
                    <i class="fas fa-hotel text-pink fa-2x"></i>
                    <br/>
                    <small>Hotels</small>
                  </Col>
                  <Col className="card-date mr-1 text-center">
                    <i class="fas fa-utensils text-orange fa-2x"></i>
                    <br/>
                    <small>Restaurants</small>
                  </Col>
                  <Col className="card-date mr-1 text-center">
                    <i class="fas fa-landmark text-gray fa-2x"></i>
                    <br/>
                    <small>Sightseengs</small>
                  </Col>
                  <Col className="card-date mr-1 text-center">
                    <i class="fas fa-camera-retro text-darker fa-2x"></i>
                    <br/>
                    <small>Photo places</small>
                  </Col>
                  <Col className="card-date mr-1 text-center">
                    <i class="fas fa-star text-yellow fa-2x"></i>
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
                    <Card className="card-date mb-2 text-center pt-2">
                      <h4>Overview</h4>
                    </Card>
                    <Card className="card-date mb-2 text-center pt-2">
                      <small>24<sup><small>th</small></sup> June</small>
                      <h4>Monday</h4>
                    </Card>
                    <Card className="card-date mb-2 text-center pt-2">
                      <small>25<sup><small>th</small></sup> June</small>
                      <h4>Tuesday</h4>
                    </Card>
                    <Card className="card-date mb-2 text-center pt-2">
                      <small>27<sup><small>th</small></sup> June</small>
                      <h4>Thursday</h4>
                    </Card>
                    <Card className="card-date mb-2 text-center pt-2">
                      <small>28<sup><small>th</small></sup> June</small>
                      <h4>Friday</h4>
                    </Card>
                  </Col>
                  <Col xl="10" style={{ flexWrap: "nowrap", overflowY: "auto", overflowX: "hidden" }}>
                    <img className="rounded shadow mb-4" src={require("assets/img/theme/template.jpg")} style={{ width: '100%' }} />
                    <Card className="rounded shadow mb-4 px-3" style={{ minHeight: "250px" }}>
                      <Row>
                        <Col xl="8" className="pt-3">
                          <Row className="ml-1">
                            <i class="fas fa-hotel text-pink fa-lg mr-2"></i><span className="text-gray">Hotel</span>
                          </Row>
                          <Row className="ml-1">
                            <h3>Gran Hotel La Florida G.L. Monumento</h3>
                          </Row>
                          <Row className="ml-1">
                            <i class="fas fa-star text-yellow fa-sm mr-1"></i>
                            <i class="fas fa-star text-yellow fa-sm mr-1"></i>
                            <i class="fas fa-star text-yellow fa-sm mr-1"></i>
                            <i class="fas fa-star text-yellow fa-sm mr-1"></i>
                            <i class="fas fa-star text-yellow fa-sm"></i>
                          </Row>
                          <Row className="ml-1 mt-1 text-gray">
                            <small>Arrival at 13:00 | For 2 days</small>
                          </Row>
                          <Row className="ml-1 mt-3 mb-5 text-gray">
                            <small><i class="fas fa-map-marker-alt text-red"></i> Carretera Vallvidrera-Tibidabo, 83-93</small>
                          </Row>
                          <hr />
                          <Row className="ml-1 mt-3 mt--3 text-gray">
                            <img src={runningMan} style={{ height: '18px' }} />
                          </Row>
                        </Col>
                        <Col xl="4" style={{ overflow: "hidden" }} >
                          <img className="rounded-right" style={{ width: "108%", height: "250px", objectFit: "cover" }} src={require("assets/img/theme/hotel.jpg")} />
                        </Col>
                      </Row>
                    </Card>
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
                <div className="col" style={{ height: '300px' }}></div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-paperclip"></i></span>
                  </div>
                  <input type="text" class="form-control" aria-label="Text..." placeholder="Write a message" />
                  <div class="input-group-append">
                    <span class="input-group-text"><i class="far fa-paper-plane"></i></span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-white shadow">
              <CardHeader className="bg-light">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-dark ls-1 mb-1">
                      Overview
                    </h6>
                    <h3 className="text-darker">Detailed</h3>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-5 mb-xl-0" xl="4">
            <Card className="bg-gradient-white shadow">
              <CardHeader className="bg-white">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="text-darker">TODO</h3>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="bg-gradient-white shadow">
              <CardHeader className="bg-light">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-dark ls-1 mb-1">
                      Overview
                    </h6>
                    <h3 className="text-darker">Detailed</h3>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </Container>
      </>
    );
  }
}

export default Trip;
