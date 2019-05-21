import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

import FlagIcon from "components/FlagIcon/FlagIcon.jsx";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Poland
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            From 39,990 RUB.
                          </span>
                        </div>
                        <Col className="col-auto">
                          <FlagIcon className="rounded shadow" code="pl" size="3x" squared={false} />
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 3.48%
                        </span>{" "}
                        <span className="text-nowrap">People got tickets</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Italy
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            From 18,990 RUB.
                          </span>
                        </div>
                        <Col className="col-auto">
                          <FlagIcon className="rounded shadow" code="it" size="3x" squared={false} />
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 9.63%
                        </span>{" "}
                        <span className="text-nowrap">People got tickets</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Norway
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            From 44,990 RUB.
                          </span>
                        </div>
                        <Col className="col-auto">
                          <FlagIcon className="rounded shadow" code="no" size="3x" squared={false} />
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-danger mr-2">
                          <i className="fa fa-arrow-down" /> 0.15%
                        </span>{" "}
                        <span className="text-nowrap">People got tickets</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Bahamas
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            From 99,990 RUB.
                          </span>
                        </div>
                        <Col className="col-auto">
                          <FlagIcon className="rounded shadow" code="bs" size="3x" squared={false} />
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 12.33%
                        </span>{" "}
                        <span className="text-nowrap">People got tickets</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
