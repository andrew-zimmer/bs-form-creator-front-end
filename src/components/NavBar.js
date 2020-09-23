import React from "react";

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import { userLogout } from '../actions/userAction'

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = (props) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand as={Link} to="/">BS Form Creator</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/forms/new">Create From</Nav.Link>
            <NavDropdown title="Forms" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#form1">Form 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/forms">View All</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {!props.login ? [<Nav.Link as={Link} to="/users/login">Log In</Nav.Link>,
            <Nav.Link eventKey={2} as={Link} to="/users/new">
              Sign Up
            </Nav.Link>
            ] : <Nav.Link as={Link} to='#' onClick={() => props.userLogout(props.userId)}>Log Out</Nav.Link>}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    login: state.user.login,
    userId: state.user.data.id
  }
}

export default connect(mapStateToProps, { userLogout })(NavBar)
