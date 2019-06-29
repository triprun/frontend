/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Col, Nav, NavItem, NavLink } from "reactstrap";

import { Row } from "components/Micro/Row.jsx";

export const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {`${new Date().getFullYear()} `}
            <a
              className="font-weight-bold ml-1"
              href="/"
              rel="noopener noreferrer"
              target="_blank"
            >
              TripRun
            </a>
          </div>
        </Col>

        <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <NavItem>
              <NavLink
                href="https://medium.com/@triprunofficial"
                rel="noopener noreferrer"
                target="_blank"
              >
                About Us
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="https://medium.com/@triprunofficial"
                rel="noopener noreferrer"
                target="_blank"
              >
                Medium
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="https://medium.com/@triprunofficial"
                rel="noopener noreferrer"
                target="_blank"
              >
                Privacy Policy
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
};
