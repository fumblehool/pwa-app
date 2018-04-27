import React, { Component } from 'react';
import {Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
  render() {
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a className="cursor">Pwa-App</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/home">
            <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/player">
                <NavItem eventKey={2}>Players</NavItem>
            </LinkContainer>
            <LinkContainer to="/team">
                <NavItem eventKey={3}>Teams</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
                <NavItem eventKey={4}>About</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;