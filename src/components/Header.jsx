import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar inverse staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">JSON Manager</Link>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Header;