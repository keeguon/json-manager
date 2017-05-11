import React from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar inverse staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">JSON Manager</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Header;