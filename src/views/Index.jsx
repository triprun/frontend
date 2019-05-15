import React from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";
// reactstrap components
import {
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

import FlagIcon from "../components/FlagIcon/FlagIcon";

// core components
import {
  chartOptions,
  parseOptions,
} from "../variables/charts.jsx";

import Header from "../components/Headers/Header.jsx";

class Index extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1"
  };
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>
        <Header />
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
                      <h2 className="text-white mb-0">Latest Trips</h2>
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
                                src={require("../assets/img/theme/delhi.jpg")}
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
                            <i className="bg-warning" />
                            delayed
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
                                src={require("../assets/img/theme/team-1-800x800.jpg")}
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
                                src={require("../assets/img/theme/team-2-800x800.jpg")}
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
                                src={require("../assets/img/theme/team-3-800x800.jpg")}
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
                                src={require("../assets/img/theme/team-4-800x800.jpg")}
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
                            <span className="mr-2">60%</span>
                            <div>
                              <Progress
                                max="100"
                                value="60"
                                barClassName="bg-warning"
                              />
                            </div>
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
                            <i className="bg-danger" />
                            cancelled
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
                                src={require("../assets/img/theme/team-1-800x800.jpg")}
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
                                src={require("../assets/img/theme/team-2-800x800.jpg")}
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
                                src={require("../assets/img/theme/team-3-800x800.jpg")}
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
                                src={require("../assets/img/theme/team-4-800x800.jpg")}
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
                            <span className="mr-2">72%</span>
                            <div>
                              <Progress
                                max="100"
                                value="72"
                                barClassName="bg-danger"
                              />
                            </div>
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
                                src={require("../assets/img/theme/mallorca.jpg")}
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
                            <i className="bg-success" />
                            completed
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
                                src={require("../assets/img/theme/team-1-800x800.jpg")}
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
                                src={require("../assets/img/theme/team-2-800x800.jpg")}
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
                                src={require("../assets/img/theme/team-3-800x800.jpg")}
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
                                src={require("../assets/img/theme/team-4-800x800.jpg")}
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
                            <span className="mr-2">100%</span>
                            <div>
                              <Progress
                                max="100"
                                value="100"
                                barClassName="bg-success"
                              />
                            </div>
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
                            completed
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
                                src={require("../assets/img/theme/team-1-800x800.jpg")}
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
                                src={require("../assets/img/theme/team-2-800x800.jpg")}
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
                                src={require("../assets/img/theme/team-3-800x800.jpg")}
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
                                src={require("../assets/img/theme/team-4-800x800.jpg")}
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
                            <span className="mr-2">100%</span>
                            <div>
                              <Progress
                                max="100"
                                value="100"
                                barClassName="bg-success"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
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
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Best tickets</h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        See all
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Direction</th>
                      <th scope="col">Price</th>
                      <th scope="col">Tickets left</th>
                      <th scope="col">Price Change</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Alania, Turkey</th>
                      <td>8,990 rub.</td>
                      <td>12</td>
                      <td>
                        <i className="fas fa-arrow-down text-success mr-3" />{" "}
                        22,53%
                      </td>
                      <td>
                        <Button
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Buy
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Astana, Kazakhstan</th>
                      <td>22,990 rub.</td>
                      <td>32</td>
                      <td>
                        <i className="fas fa-arrow-up text-warning mr-3" />{" "}
                        9,53%
                      </td>
                      <td>
                        <Button
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Buy
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Novosibirsk, Russia</th>
                      <td>3,513 rub.</td>
                      <td>111</td>
                      <td>
                        <i className="fas fa-arrow-down text-success mr-3" />{" "}
                        36,49%
                      </td>
                      <td>
                        <Button
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Buy
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Cairo, Egypt</th>
                      <td>11,990 rub.</td>
                      <td>9</td>
                      <td>
                        <i className="fas fa-arrow-down text-success mr-3" />{" "}
                        10,87%
                      </td>
                      <td>
                        <Button
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Buy
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Denver, CO, USA</th>
                      <td>44,650 rub.</td>
                      <td>26</td>
                      <td>
                        <i className="fas fa-arrow-down text-success mr-3" />{" "}
                        6,53%
                      </td>
                      <td>
                        <Button
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Buy
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Index;
