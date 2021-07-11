import React, {useEffect, useState, useContext} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {AuthContext} from '../firebase/authProvider';

interface props {
  signIn: () => void;
  signOut: ()=> void;
}

const NavBar = ({signIn, signOut}: props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const {pathname} = useLocation();
  const user = useContext(AuthContext);
  useEffect(() => {
    setExpanded(false);
  }, [pathname]);
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="sm"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/viewers">
            Viewers
          </Nav.Link>
        </Nav>
        <Nav className="justify-content-right">
          {user ? (
            <NavDropdown alignRight title = 'Profile' id = 'dropdown'>
              <NavDropdown.Item as={Link} to = '/profile'>Profile</NavDropdown.Item>
              <NavDropdown.Item onClick= {signOut}>Sign Out</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav.Link id="logInButton" onClick={signIn}>
              Sign In
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
