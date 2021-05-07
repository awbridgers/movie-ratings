import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Navbar.Brand href="/">Movie Ratings</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#/viewers">Viewers</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
