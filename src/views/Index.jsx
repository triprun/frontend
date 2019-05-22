import React from 'react';
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
} from 'reactstrap';

import { Header } from 'components/Headers/Header.jsx';

export const Index = () => {
  // const [apiKey, setApiKey] = useState('12e2ab5231ccfcadaf710645bb7b9eff');

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
                <Row style={{ flexWrap: "nowrap", overflowY: "hidden", overflowX: "auto" }}>
                  <div className="img-card col-lg-2 m-0 p-0 mr-3">
                    <img
                      alt="..."
                      className="rounded shadow float-left"
                      style={{ width: '100%', height: '328px', objectFit: "cover" }}
                      src={require("assets/img/theme/cave.jpg")}
                    />
                    <p className="img-desc rounded">This is hovered text</p>
                  </div>
                  <div className="img-card col-lg-2 m-0 p-0 mr-3">
                    <img
                      alt="..."
                      className="rounded shadow float-left"
                      style={{ width: '100%', height: '328px',  objectFit: "cover" }}
                      src={require("assets/img/theme/yellowstone.jpg")}
                    />
                    <p className="img-desc rounded">This is hovered text</p>
                  </div>
                  <div className="img-card col-lg-2 m-0 p-0 mr-3">
                    <img
                      alt="..."
                      className="rounded shadow float-left"
                      style={{ width: '100%', height: '328px',  objectFit: "cover" }}
                      src={require("assets/img/theme/beach.jpg")}
                    />
                    <p className="img-desc rounded">This is hovered text</p>
                  </div>
                  <div className="img-card col-lg-2 m-0 p-0 mr-3">
                    <img
                      alt="..."
                      className="rounded shadow float-left"
                      style={{ width: '100%', height: '328px',  objectFit: "cover" }}
                      src={require("assets/img/theme/baikal.jpg")}
                    />
                    <p className="img-desc rounded">This is hovered text</p>
                  </div>
                  <div className="img-card col-lg-2 m-0 p-0 mr-3">
                    <img
                      alt="..."
                      className="rounded shadow float-left"
                      style={{ width: '100%', height: '328px',  objectFit: "cover" }}
                      src={require("assets/img/theme/italy.jpg")}
                    />
                    <p className="img-desc rounded">This is hovered text</p>
                  </div>
                  <div className="img-card col-lg-2 m-0 p-0 mr-3">
                    <img
                      alt="..."
                      className="rounded shadow float-left"
                      style={{ width: '100%', height: '328px',  objectFit: "cover" }}
                      src={require("assets/img/theme/turkey.jpg")}
                    />
                    <p className="img-desc rounded">This is hovered text</p>
                  </div>
                  <div className="img-card col-lg-2 m-0 p-0 mr-3">
                    <img
                      alt="..."
                      className="rounded shadow float-left"
                      style={{ width: '100%', height: '328px',  objectFit: "cover" }}
                      src={require("assets/img/theme/karlsruhe.jpg")}
                    />
                    <p className="img-desc rounded">This is hovered text</p>
                  </div>
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
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">New Places</h3>
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
                <Row style={{ flexWrap: "nowrap", overflowY: "hidden", overflowX: "auto" }}>
                  <div className="img-card col-lg-3 m-0 p-0 mr-3">
                    <img
                      alt="..."
                      className="rounded shadow float-left"
                      style={{ width: '100%', minHeight: '328px', maxHeight: '328px', objectFit: "cover" }}
                      src={require("assets/img/theme/crave.jpg")}
                    />
                    <p className="img-desc rounded">This is hovered text</p>
                  </div>
                  <div className="img-card col-lg-3 m-0 p-0 mr-3">
                    <img
                      alt="..."
                      className="rounded shadow float-left"
                      style={{ width: '100%', minHeight: '328px', maxHeight: '328px', objectFit: "cover" }}
                      src={require("assets/img/theme/holland.jpg")}
                    />
                    <p className="img-desc rounded">This is hovered text</p>
                  </div>
                  <div className="img-card col-lg-3 m-0 p-0 mr-3">
                    <img
                      alt="..."
                      className="rounded shadow float-left"
                      style={{ width: '100%', minHeight: '328px', maxHeight: '328px', objectFit: "cover" }}
                      src={require("assets/img/theme/kricket.jpg")}
                    />
                    <p className="img-desc rounded">This is hovered text</p>
                  </div>
                  <div className="img-card col-lg-3 m-0 p-0 mr-3">
                    <img
                      alt="..."
                      className="rounded shadow float-left"
                      style={{ width: '100%', minHeight: '328px', maxHeight: '328px', objectFit: "cover" }}
                      src={require("assets/img/theme/kafka.jpg")}
                    />
                    <p className="img-desc rounded">This is hovered text</p>
                  </div>
                  <div className="img-card col-lg-3 m-0 p-0 mr-3">
                    <img
                      alt="..."
                      className="rounded shadow float-left"
                      style={{ width: '100%', minHeight: '328px', maxHeight: '328px', objectFit: "cover" }}
                      src={require("assets/img/theme/tower.jpg")}
                    />
                    <p className="img-desc rounded">This is hovered text</p>
                  </div>
                  <div className="img-card col-lg-3 m-0 p-0 mr-3">
                    <img
                      alt="..."
                      className="rounded shadow float-left"
                      style={{ width: '100%', minHeight: '328px', maxHeight: '328px', objectFit: "cover" }}
                      src={require("assets/img/theme/bridge.jpg")}
                    />
                    <p className="img-desc rounded">This is hovered text</p>
                  </div>
                  <div className="img-card col-lg-3 m-0 p-0 mr-3">
                    <img
                      alt="..."
                      className="rounded shadow float-left"
                      style={{ width: '100%', minHeight: '328px', maxHeight: '328px', objectFit: "cover" }}
                      src={require("assets/img/theme/karlsruhe.jpg")}
                    />
                    <p className="img-desc rounded">This is hovered text</p>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
