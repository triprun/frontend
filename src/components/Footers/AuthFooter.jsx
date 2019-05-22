/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

export const AuthFooter = () => {
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
                href="https://www.creative-tim.com/presentation?ref=adr-admin-footer"
                rel="noopener noreferrer"
                target="_blank"
              >
                About Us
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="http://blog.creative-tim.com?ref=adr-admin-footer"
                rel="noopener noreferrer"
                target="_blank"
              >
                Medium
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=adr-admin-footer"
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
