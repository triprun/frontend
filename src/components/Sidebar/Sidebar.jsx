/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

import runningMan from "assets/img/icons/running.svg";

var ps;

export const Sidebar = (props) => {

  const [bgColor, setBgColor] = useState(props.bgColor);
  const [routes, setRoutes] = useState(props.routes);
  const [collapseOpen, setCollapseOpen] = useState(false);

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen)
  };
  // closes the collapse
  const closeCollapse = () => {
    setCollapseOpen(false);
  };
  // creates the links that appear in the left menu / Sidebar
  const createLinks = routes => {
    return routes.map((prop, key) => {
      if(!prop.inner) return (
        <NavItem key={key}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            onClick={closeCollapse}
            activeClassName="active"
            disabled={prop.name === 'Recommended' ? true : false}
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });
  };

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white"
      expand="md"
      id="sidenav-main"
    >
      <Container fluid>
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand */}
        <NavbarBrand className="pt-0" tag={Link} to="/">
          <h1 className="text-darker">Trip<img style={{ height: '28px' }} src={runningMan} />un</h1>
        </NavbarBrand>
        {/* User */}
        <Nav className="align-items-center d-md-none">
          <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Media className="align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    alt="..."
                    src="https://i.ibb.co/Y8KyHW6/team-1-800x800.jpg"
                  />
                </span>
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title" header tag="div">
                <h6 className="text-overflow m-0">{`<%Username%>`}</h6>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-single-02" />
                <span>My profile</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-settings-gear-65" />
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-calendar-grid-58" />
                <span>Activity</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-support-16" />
                <span>Support</span>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen}>
          {/* Collapse header */}
          <div className="navbar-collapse-header d-md-none">
            <Row>
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          {/* Form */}
          <Form className="mt-4 mb-3 d-md-none">
            <InputGroup className="input-group-rounded input-group-merge">
              <Input
                aria-label="Search"
                className="form-control-rounded form-control-prepended"
                placeholder="Search"
                type="search"
              />
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <span className="fa fa-search" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          {/* Navigation */}
          <Nav navbar>{createLinks(routes)}</Nav>
          <div className="d-none d-sm-block">
            <br />
            <br />
            <br />
            <hr className="my-3" />
            <h6 className="navbar-heading text-muted">Quick Chat</h6>
            <Col>
              <Nav className="navbar-transparent bg-transparent">
                <NavItem key={1}>
                  <Row className="align-items-center">
                  <Badge color="" className="badge-dot mr-1">
                    <i className="bg-green" />
                    Inna Shmalz
                  </Badge>
                    <h6 className="text-info">invitation</h6>
                  </Row>
                </NavItem>
                <NavItem key={2}>
                  <Row className="align-items-center">
                    <Badge color="" className="badge-dot mr-1">
                      <i className="bg-gray" />
                      Dan Rodriguez
                    </Badge>
                    <h6 className="text-info">message</h6>
                  </Row>
                </NavItem>
                <NavItem key={3}>
                  <Row className="align-items-center">
                    <Badge color="" className="badge-dot mr-1">
                      <i className="bg-gray" />
                      Carolina Velez
                    </Badge>
                    <h6 className="text-info">message</h6>
                  </Row>
                </NavItem>
              </Nav>
            </Col>
          </div>
        </Collapse>
      </Container>
    </Navbar>
  );
};
