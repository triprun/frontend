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

import FlagIcon from "../../components/FlagIcon/FlagIcon";

// core components
import UserHeader from "../../components/Headers/UserHeader.jsx";

class Profile extends React.Component {
  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Overview
                      </h6>
                      <h2 className="text-white mb-0">Active Trips</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Table
                    className="align-items-center table-dark bg-gradient-default table-flush text-white"
                    responsive
                  >
                    <tbody>
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <a
                              className="avatar rounded-circle mr-3"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("../../assets/img/theme/delhi.jpg")}
                              />
                            </a>
                            <Media>
                              <span className="mb-0 text-sm">
                                #BestTripToDelhi
                              </span>
                            </Media>
                          </Media>
                        </th>
                        <td>
                          <Badge color="" className="badge-dot mr-4">
                            <i className="bg-info" />
                            planning
                          </Badge>
                        </td>
                        <td>
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
                                src={require("../../assets/img/theme/team-1-800x800.jpg")}
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
                                src={require("../../assets/img/theme/team-2-800x800.jpg")}
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
                                src={require("../../assets/img/theme/team-3-800x800.jpg")}
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
                                src={require("../../assets/img/theme/team-4-800x800.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip237898869"
                            >
                              Jessica Doe
                            </UncontrolledTooltip>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2 text-green"><i class="fas fa-user-friends" /> New companion invited</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <a
                              className="avatar rounded-circle mr-3"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <FlagIcon className="rounded-circle" code="ru" size="3x" squared={true} />
                            </a>
                            <Media>
                              <span className="mb-0 text-sm">
                                Amazing Trip To Moscow
                              </span>
                            </Media>
                          </Media>
                        </th>
                        <td>
                          <Badge color="" className="badge-dot mr-4">
                            <i className="bg-warning" />
                            delayed
                          </Badge>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              className="avatar avatar-sm"
                              href="#pablo"
                              id="tooltip707904950"
                              onClick={e => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                className="rounded-circle"
                                src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip707904950"
                            >
                              Ryan Tompson
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm"
                              href="#pablo"
                              id="tooltip353988222"
                              onClick={e => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                className="rounded-circle"
                                src={require("../../assets/img/theme/team-2-800x800.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip353988222"
                            >
                              Romina Hadid
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm"
                              href="#pablo"
                              id="tooltip467171202"
                              onClick={e => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                className="rounded-circle"
                                src={require("../../assets/img/theme/team-3-800x800.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip467171202"
                            >
                              Alexander Smith
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm"
                              href="#pablo"
                              id="tooltip362118155"
                              onClick={e => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                className="rounded-circle"
                                src={require("../../assets/img/theme/team-4-800x800.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip362118155"
                            >
                              Jessica Doe
                            </UncontrolledTooltip>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2 text-danger"><i class="fas fa-user-times" /> Companion left</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <a
                              className="avatar rounded-circle mr-3"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("../../assets/img/theme/mallorca.jpg")}
                              />
                            </a>
                            <Media>
                              <span className="mb-0 text-sm">
                                Exploring Mallorca
                              </span>
                            </Media>
                          </Media>
                        </th>
                        <td>
                          <Badge color="" className="badge-dot">
                            <i className="bg-info" />
                            planning
                          </Badge>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              className="avatar avatar-sm"
                              href="#pablo"
                              id="tooltip188614932"
                              onClick={e => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                className="rounded-circle"
                                src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip188614932"
                            >
                              Ryan Tompson
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm"
                              href="#pablo"
                              id="tooltip66535734"
                              onClick={e => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                className="rounded-circle"
                                src={require("../../assets/img/theme/team-2-800x800.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip66535734"
                            >
                              Romina Hadid
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm"
                              href="#pablo"
                              id="tooltip427561578"
                              onClick={e => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                className="rounded-circle"
                                src={require("../../assets/img/theme/team-3-800x800.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip427561578"
                            >
                              Alexander Smith
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm"
                              href="#pablo"
                              id="tooltip904098289"
                              onClick={e => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                className="rounded-circle"
                                src={require("../../assets/img/theme/team-4-800x800.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip904098289"
                            >
                              Jessica Doe
                            </UncontrolledTooltip>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2 text-info"><i class="fas fa-monument" /> New place suggested</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <a
                              className="avatar rounded-circle mr-3"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <FlagIcon className="rounded-circle" code="es" size="3x" squared={true} />
                            </a>
                            <Media>
                              <span className="mb-0 text-sm">
                                Jump into jungles of Madrid
                              </span>
                            </Media>
                          </Media>
                        </th>
                        <td>
                          <Badge color="" className="badge-dot mr-4">
                            <i className="bg-success" />
                            time to go
                          </Badge>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              className="avatar avatar-sm"
                              href="#pablo"
                              id="tooltip781594051"
                              onClick={e => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                className="rounded-circle"
                                src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip781594051"
                            >
                              Ryan Tompson
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm"
                              href="#pablo"
                              id="tooltip840372212"
                              onClick={e => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                className="rounded-circle"
                                src={require("../../assets/img/theme/team-2-800x800.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip840372212"
                            >
                              Romina Hadid
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm"
                              href="#pablo"
                              id="tooltip497647175"
                              onClick={e => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                className="rounded-circle"
                                src={require("../../assets/img/theme/team-3-800x800.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip497647175"
                            >
                              Alexander Smith
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm"
                              href="#pablo"
                              id="tooltip951447946"
                              onClick={e => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                className="rounded-circle"
                                src={require("../../assets/img/theme/team-4-800x800.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip951447946"
                            >
                              Jessica Doe
                            </UncontrolledTooltip>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2 text-info"><i class="fas fa-poll" /> New poll created</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("../../assets/img/theme/team-4-800x800.jpg")}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <Button
                      className="mr-4"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Connect
                    </Button>
                    <Button
                      className="float-right"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Message
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Trips</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Followers</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                      Jessica Jones
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Photos</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Show All
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <img
                    className="rounded shadow float-left"
                    style={{ width: '308px', height: '308px', objectFit: 'cover' }}
                    src={require("../../assets/img/theme/beach.jpg")}
                  />
                  <div className="float-right">
                    <Row>
                      <img
                        className="rounded shadow"
                        style={{ width: '150px', height: '150px', marginRight: '8px', objectFit: 'cover' }}
                        src={require("../../assets/img/theme/light.jpg")}
                      />
                      <img
                        className="rounded shadow"
                        style={{ width: '150px', height: '150px', marginRight: '8px', objectFit: 'cover' }}
                        src={require("../../assets/img/theme/italy.jpg")}
                      />
                      <img
                        className="rounded shadow"
                        style={{ width: '150px', height: '150px', marginRight: '8px', objectFit: 'cover' }}
                        src={require("../../assets/img/theme/mallorca.jpg")}
                      />
                    </Row>
                    <Row style={{ marginTop: '8px' }}>
                      <img
                        className="rounded shadow"
                        style={{ width: '150px', height: '150px', marginRight: '8px', objectFit: 'cover' }}
                        src={require("../../assets/img/theme/cave.jpg")}
                      />
                      <img
                        className="rounded shadow"
                        style={{ width: '150px', height: '150px', marginRight: '8px', objectFit: 'cover' }}
                        src={require("../../assets/img/theme/karlsruhe.jpg")}
                      />
                      <img
                        className="rounded shadow"
                        style={{ width: '150px', height: '150px', marginRight: '8px', objectFit: 'cover' }}
                        src={require("../../assets/img/theme/germany.jpg")}
                      />
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="shadow">
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
            </Col>
            <Col xl="12">
              <br />
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My Trips</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Show All
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row style={{ flexWrap: "nowrap", overflow: "auto" }}>
                    <div className="img-card">
                      <img
                        className="rounded shadow float-left"
                        style={{ minWidth: '220px', height: '328px', marginRight: '8px', objectFit: "cover" }}
                        src={require("../../assets/img/theme/cave.jpg")}
                      />
                      <p className="img-desc">This is hovered text</p>
                    </div>
                    <img
                      className="rounded shadow float-left"
                      style={{ minWidth: '220px', height: '328px', marginRight: '8px', objectFit: "cover" }}
                      src={require("../../assets/img/theme/yellowstone.jpg")}
                    />
                    <img
                      className="rounded shadow float-left"
                      style={{ minWidth: '220px', height: '328px', marginRight: '8px', objectFit: "cover" }}
                      src={require("../../assets/img/theme/beach.jpg")}
                    />
                    <img
                      className="rounded shadow float-left"
                      style={{ minWidth: '220px', height: '328px', marginRight: '8px', objectFit: "cover" }}
                      src={require("../../assets/img/theme/baikal.jpg")}
                    />
                    <img
                      className="rounded shadow float-left"
                      style={{ minWidth: '220px', height: '328px', marginRight: '8px', objectFit: "cover" }}
                      src={require("../../assets/img/theme/italy.jpg")}
                    />
                    <img
                      className="rounded shadow float-left"
                      style={{ minWidth: '220px', height: '328px', marginRight: '8px', objectFit: "cover" }}
                      src={require("../../assets/img/theme/turkey.jpg")}
                    />
                    <img
                      className="rounded shadow float-left"
                      style={{ minWidth: '220px', height: '328px', marginRight: '8px', objectFit: "cover" }}
                      src={require("../../assets/img/theme/karlsruhe.jpg")}
                    />
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
