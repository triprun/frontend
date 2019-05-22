import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
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

// core components
import { TripHeader } from "components/Headers/TripHeader.jsx";

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
              <CardBody>
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
                    <small>Sightseeings</small>
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
                    <Card className="card-date shadow mb-2 text-center pt-2">
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
                    <Card className="rounded shadow mb-4 px-3" style={{ minHeight: "260px" }}>
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
                          <Row className="ml-1 mt-3 text-gray">
                            <small><i class="fas fa-map-marker-alt text-red"></i> Carretera Vallvidrera-Tibidabo, 83-93</small>
                          </Row>
                          <Row className="ml-1 mt-3 text-blue" style={{ cursor: 'pointer' }}>
                            <small>Comments...</small>
                          </Row>
                          <Row className="ml-1 mt-4 text-gray">
                            <Row className="ml-1 mr-6">
                              <div className="mt-1 mr-2">
                                <img alt="..." src={runningMan} style={{ height: '18px' }} />
                                <sup>
                                  <i class="fas fa-check fa-sm text-green"></i>
                                </sup>
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
                                    src={require("assets/img/theme/team-4-800x800.jpg")}
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
                              </div>
                            </Row>
                            <Row className="ml-1">
                              <div className="mt-1 mr-2">
                                <img alt="..." src={runningMan} style={{ height: '18px' }} />
                                <sup>
                                  <i class="fas fa-times fa-sm text-red"></i>
                                </sup>
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
                              </div>
                            </Row>
                          </Row>
                        </Col>
                        <Col xl="4" style={{ overflow: "hidden" }} >
                          <img alt="..." className="rounded-right" style={{ width: "108%", height: "260px", objectFit: "cover" }} src={require("assets/img/theme/hotel.jpg")} />
                        </Col>
                      </Row>
                    </Card>
                    <Card className="rounded shadow mb-4 px-3" style={{ minHeight: "260px" }}>
                      <Row>
                        <Col xl="8" className="pt-3">
                          <Row className="ml-1">
                            <i class="fas fa-utensils text-orange fa-lg mr-2"></i><span className="text-gray">Restaurant</span>
                          </Row>
                          <Row className="ml-1">
                            <h3>Bodega Biarritz</h3>
                          </Row>
                          <Row className="ml-1">
                            <i class="fas fa-star text-yellow fa-sm mr-1"></i>
                            <i class="fas fa-star text-yellow fa-sm mr-1"></i>
                            <i class="fas fa-star text-yellow fa-sm mr-1"></i>
                            <i class="fas fa-star text-yellow fa-sm mr-1"></i>
                            <i class="fas fa-star text-yellow fa-sm"></i>
                          </Row>
                          <Row className="ml-1 mt-1 text-gray">
                            <small>Arrival at 12:00</small>
                          </Row>
                          <Row className="ml-1 mt-3 text-gray">
                            <small><i class="fas fa-map-marker-alt text-red"></i> Nou de San Francesc 7</small>
                          </Row>
                          <Row className="ml-1 mt-3 text-blue" style={{ cursor: 'pointer' }}>
                            <small>Comments...</small>
                          </Row>
                          <Row className="ml-1 mt-4 text-gray">
                            <Row className="ml-1 mr-6">
                              <div className="mt-1 mr-2">
                                <img alt="..." src={runningMan} style={{ height: '18px' }} />
                                <sup>
                                  <i class="fas fa-check fa-sm text-green"></i>
                                </sup>
                              </div>
                              <div className="avatar-group">
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
                              </div>
                            </Row>
                            <Row className="ml-1">
                              <div className="mt-1 mr-2">
                                <img alt="..." src={runningMan} style={{ height: '18px' }} />
                                <sup>
                                  <i class="fas fa-times fa-sm text-red"></i>
                                </sup>
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
                                    src={require("assets/img/theme/team-4-800x800.jpg")}
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
                              </div>
                            </Row>
                          </Row>
                        </Col>
                        <Col xl="4" style={{ overflow: "hidden" }} >
                          <img alt="..." className="rounded-right" style={{ width: "108%", height: "260px", objectFit: "cover" }} src={require("assets/img/theme/rest.jpg")} />
                        </Col>
                      </Row>
                    </Card>
                    <Card className="rounded shadow mb-4 px-3" style={{ minHeight: "260px" }}>
                      <Row>
                        <Col xl="8" className="pt-3">
                          <Row className="ml-1">
                            <i class="fas fa-landmark text-gray fa-lg mr-2"></i><span className="text-gray">Sightseeing</span>
                          </Row>
                          <Row className="ml-1">
                            <h3>Temple Expiatori de la Sagrada Família</h3>
                          </Row>
                          <Row className="ml-1">
                            <i class="fas fa-star text-yellow fa-sm mr-1"></i>
                            <i class="fas fa-star text-yellow fa-sm mr-1"></i>
                            <i class="fas fa-star text-yellow fa-sm mr-1"></i>
                            <i class="fas fa-star text-yellow fa-sm mr-1"></i>
                            <i class="fas fa-star text-yellow fa-sm"></i>
                          </Row>
                          <Row className="ml-1 mt-1 text-gray">
                            <small>Arrival at 16:00 | For 2 hours</small>
                          </Row>
                          <Row className="ml-1 mt-3 text-gray">
                            <small><i class="fas fa-map-marker-alt text-red"></i> Carrer de Mallorca, 401</small>
                          </Row>
                          <Row className="ml-1 mt-3 text-blue" style={{ cursor: 'pointer' }}>
                            <small>Comments...</small>
                          </Row>
                          <Row className="ml-1 mt-4 text-gray">
                            <Row className="ml-1 mr-6">
                              <div className="mt-1 mr-2">
                                <img alt="..." src={runningMan} style={{ height: '18px' }} />
                                <sup>
                                  <i class="fas fa-check fa-sm text-green"></i>
                                </sup>
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
                                    src={require("assets/img/theme/team-4-800x800.jpg")}
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
                              </div>
                            </Row>
                            <Row className="ml-1">
                              <div className="mt-1 mr-2">
                                <img alt="..." src={runningMan} style={{ height: '18px' }} />
                                <sup>
                                  <i class="fas fa-times fa-sm text-red"></i>
                                </sup>
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
                              </div>
                            </Row>
                          </Row>
                        </Col>
                        <Col xl="4" style={{ overflow: "hidden" }} >
                          <img alt="..." className="rounded-right" style={{ width: "108%", height: "260px", objectFit: "cover" }} src={require("assets/img/theme/sightseeing.jpg")} />
                        </Col>
                      </Row>
                    </Card>
                    <Card className="rounded shadow mb-4 px-3" style={{ minHeight: "260px" }}>
                      <Row>
                        <Col xl="8" className="pt-3">
                          <Row className="ml-1">
                            <i class="fas fa-landmark text-gray fa-lg mr-2"></i><span className="text-gray">Sightseeing</span>
                          </Row>
                          <Row className="ml-1">
                            <h3>Casa Batlló</h3>
                          </Row>
                          <Row className="ml-1">
                            <i class="fas fa-star text-yellow fa-sm mr-1"></i>
                            <i class="fas fa-star text-yellow fa-sm mr-1"></i>
                            <i class="fas fa-star text-yellow fa-sm mr-1"></i>
                            <i class="fas fa-star text-yellow fa-sm mr-1"></i>
                            <i class="fas fa-star text-yellow fa-sm"></i>
                          </Row>
                          <Row className="ml-1 mt-1 text-gray">
                            <small>Arrival at 20:00 | For 1 hour</small>
                          </Row>
                          <Row className="ml-1 mt-3 text-gray">
                            <small><i class="fas fa-map-marker-alt text-red"></i> Passeig de Gràcia, 43</small>
                          </Row>
                          <Row className="ml-1 mt-3 text-blue" style={{ cursor: 'pointer' }}>
                            <small>Comments...</small>
                          </Row>
                          <Row className="ml-1 mt-4 text-gray">
                            <Row className="ml-1 mr-6">
                              <div className="mt-1 mr-2">
                                <img alt="..." src={runningMan} style={{ height: '18px' }} />
                                <sup>
                                  <i class="fas fa-check fa-sm text-green"></i>
                                </sup>
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
                                    src={require("assets/img/theme/team-4-800x800.jpg")}
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
                              </div>
                            </Row>
                            <Row className="ml-1">
                              <div className="mt-1 mr-2">
                                <img alt="..." src={runningMan} style={{ height: '18px' }} />
                                <sup>
                                  <i class="fas fa-times fa-sm text-red"></i>
                                </sup>
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
                              </div>
                            </Row>
                          </Row>
                        </Col>
                        <Col xl="4" style={{ overflow: "hidden" }} >
                          <img alt="..." className="rounded-right" style={{ width: "108%", height: "260px", objectFit: "cover" }} src={require("assets/img/theme/sightseeing2.jpg")} />
                        </Col>
                      </Row>
                    </Card>
                    <Card className="rounded shadow mb-4 px-3" style={{ minHeight: "260px" }}>
                      <Row>
                        <Col xl="8" className="pt-3">
                          <Row className="ml-1">
                            <i class="fas fa-utensils text-orange fa-lg mr-2"></i><span className="text-gray">Restaurant</span>
                          </Row>
                          <Row className="ml-1">
                            <h3>Souvenir Restaurant Ruso</h3>
                          </Row>
                          <Row className="ml-1">
                            <i class="fas fa-star text-yellow fa-sm mr-1"></i>
                            <i class="fas fa-star text-yellow fa-sm mr-1"></i>
                            <i class="fas fa-star text-yellow fa-sm mr-1"></i>
                            <i class="fas fa-star text-yellow fa-sm mr-1"></i>
                            <i class="fas fa-star text-yellow fa-sm"></i>
                          </Row>
                          <Row className="ml-1 mt-1 text-gray">
                            <small>Arrival at 22:00</small>
                          </Row>
                          <Row className="ml-1 mt-3 text-gray">
                            <small><i class="fas fa-map-marker-alt text-red"></i> Carrer de València, 232</small>
                          </Row>
                          <Row className="ml-1 mt-3 text-blue" style={{ cursor: 'pointer' }}>
                            <small>Comments...</small>
                          </Row>
                          <Row className="ml-1 mt-4 text-gray">
                            <Row className="ml-1 mr-6">
                              <div className="mt-1 mr-2">
                                <img alt="..." src={runningMan} style={{ height: '18px' }} />
                                <sup>
                                  <i class="fas fa-check fa-sm text-green"></i>
                                </sup>
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
                                    src={require("assets/img/theme/team-4-800x800.jpg")}
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
                              </div>
                            </Row>
                            <Row className="ml-1">
                              <div className="mt-1 mr-2">
                                <img alt="..." src={runningMan} style={{ height: '18px' }} />
                                <sup>
                                  <i class="fas fa-times fa-sm text-red"></i>
                                </sup>
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
                              </div>
                            </Row>
                          </Row>
                        </Col>
                        <Col xl="4" style={{ overflow: "hidden" }} >
                          <img alt="..." className="rounded-right" style={{ width: "108%", height: "260px", objectFit: "cover" }} src={require("assets/img/theme/rest2.jpg")} />
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
                <div className="col" style={{ height: '300px' }}>
                  <div className="rounded bg-gray float-left px-2 pt-2 pb-2 ml--4 mb-2 text-white" style={{ maxWidth: "80%" }}>
                    Hi Guys! Welcome to the trip I'm planning for us :)
                  </div>
                  <div className="rounded bg-green float-right px-2 pt-2 pb-2 mr--4 mb-2 text-white" style={{ maxWidth: "80%" }}>
                    Nice to meet ya'll! I'm ready to head out ASAP xoxo
                  </div>
                  <div className="rounded bg-green float-right px-2 pt-2 pb-2 mr--4 mb-2 text-white" style={{ maxWidth: "80%" }}>
                    btw, who will add Jonah? He wants to join us
                  </div>
                </div>
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
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <Media>
                            <span className="mb-0 text-sm">
                              Buy coals
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-success" />
                          completed
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
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <Media>
                            <span className="mb-0 text-sm">
                              Save water!!!
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          infinite
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
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <Media>
                            <span className="mb-0 text-sm">
                              Spend bonuses in...
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-danger" />
                          deadline
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
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <Media>
                            <span className="mb-0 text-sm">
                              Take books to train
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-success" />
                          completed
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
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <Media>
                            <span className="mb-0 text-sm">
                              Plan my new trip
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-info" />
                          pending
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
  }
}

export default Trip;
