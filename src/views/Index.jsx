import React from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";
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
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
} from "../variables/charts.jsx";

import Header from "../components/Headers/Header.jsx";

class Index extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1",
    apiKey: "12e2ab5231ccfcadaf710645bb7b9eff"
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
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Best Shots</h3>
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
                    <img
                      className="rounded shadow float-left"
                      style={{ minWidth: '220px', height: '328px', marginRight: '8px', objectFit: "cover" }}
                      src={require("../assets/img/theme/cave.jpg")}
                    />
                    <img
                      className="rounded shadow float-left"
                      style={{ minWidth: '220px', height: '328px', marginRight: '8px', objectFit: "cover" }}
                      src={require("../assets/img/theme/yellowstone.jpg")}
                    />
                    <img
                      className="rounded shadow float-left"
                      style={{ minWidth: '220px', height: '328px', marginRight: '8px', objectFit: "cover" }}
                      src={require("../assets/img/theme/beach.jpg")}
                    />
                    <img
                      className="rounded shadow float-left"
                      style={{ minWidth: '220px', height: '328px', marginRight: '8px', objectFit: "cover" }}
                      src={require("../assets/img/theme/baikal.jpg")}
                    />
                    <img
                      className="rounded shadow float-left"
                      style={{ minWidth: '220px', height: '328px', marginRight: '8px', objectFit: "cover" }}
                      src={require("../assets/img/theme/italy.jpg")}
                    />
                    <img
                      className="rounded shadow float-left"
                      style={{ minWidth: '220px', height: '328px', marginRight: '8px', objectFit: "cover" }}
                      src={require("../assets/img/theme/turkey.jpg")}
                    />
                    <img
                      className="rounded shadow float-left"
                      style={{ minWidth: '220px', height: '328px', marginRight: '8px', objectFit: "cover" }}
                      src={require("../assets/img/theme/karlsruhe.jpg")}
                    />
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="6">
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
            <Col className="mb-5 mb-xl-0" xl="6">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Best hotels</h3>
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
                      <th scope="col">Place</th>
                      <th scope="col">Price</th>
                      <th scope="col">Rooms left</th>
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
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Col xs="8">
                    <h3 className="mb-0">New Places</h3>
                  </Col>
                </CardHeader>
                <CardBody>
                  <Row style={{ flexWrap: "nowrap", overflow: "auto" }}>
                    <img
                      className="rounded shadow float-left"
                      style={{ minWidth: '220px', height: '328px', marginRight: '8px', objectFit: "cover" }}
                      src={require("../assets/img/theme/cave.jpg")}
                    />
                    <img
                      className="rounded shadow float-left"
                      style={{ minWidth: '220px', height: '328px', marginRight: '8px', objectFit: "cover" }}
                      src={require("../assets/img/theme/yellowstone.jpg")}
                    />
                    <img
                      className="rounded shadow float-left"
                      style={{ minWidth: '220px', height: '328px', marginRight: '8px', objectFit: "cover" }}
                      src={require("../assets/img/theme/beach.jpg")}
                    />
                    <img
                      className="rounded shadow float-left"
                      style={{ minWidth: '220px', height: '328px', marginRight: '8px', objectFit: "cover" }}
                      src={require("../assets/img/theme/baikal.jpg")}
                    />
                    <img
                      className="rounded shadow float-left"
                      style={{ minWidth: '220px', height: '328px', marginRight: '8px', objectFit: "cover" }}
                      src={require("../assets/img/theme/italy.jpg")}
                    />
                    <img
                      className="rounded shadow float-left"
                      style={{ minWidth: '220px', height: '328px', marginRight: '8px', objectFit: "cover" }}
                      src={require("../assets/img/theme/turkey.jpg")}
                    />
                    <img
                      className="rounded shadow float-left"
                      style={{ minWidth: '220px', height: '328px', marginRight: '8px', objectFit: "cover" }}
                      src={require("../assets/img/theme/karlsruhe.jpg")}
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

export default Index;
