import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Navbar.Brand as={Link} to = '/'>Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to = '/viewers'>Viewers</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
