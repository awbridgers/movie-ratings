import React, { useEffect, useState } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {useLocation} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

const NavBar = () => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const {pathname} = useLocation();
  useEffect(()=>{
    setExpanded(false)
  },[pathname])
  return (
    <Navbar bg="dark" variant="dark" expand="sm" expanded = {expanded}  onToggle = {setExpanded}>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to = '/'><Nav.Link>Home</Nav.Link></LinkContainer>
          <LinkContainer to = '/viewers'><Nav.Link>Viewers</Nav.Link></LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
