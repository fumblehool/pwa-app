import React, { Component} from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown, } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component{
    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/home">Pwa-App</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/home">
                        <NavItem eventKey={1}>Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/player">
                            <NavItem eventKey={2}>Player</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/about">
                            <NavItem eventKey={3}>About</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <NavItem eventKey={4}>Contact</NavItem>
                        </LinkContainer>
                        </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;