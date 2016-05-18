import React from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import '../assets/styles/navigation.css';

class Navigation extends React.Component {

  render() {

    return (
      <Navbar className="Navigation" fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/" className="navbar-brand">Blog</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    );
  }

}

export default Navigation;
